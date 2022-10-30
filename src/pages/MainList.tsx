import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInfiniteSWR from 'swr/infinite';
import ProductItem from '../components/ProductItem';
import { ProductsResponse } from '../interface';
import { fetcher } from './products/ProductList';
import MainSkeleton from '../skeleton/MainSkeleton';

const MainList = () => {
  const navigate = useNavigate();
  const [lastLi, setLastLi] = useState<HTMLLIElement | null>();
  const { data, setSize, isValidating } = useInfiniteSWR<ProductsResponse>(
    (pageIndex, previousPageData: ProductsResponse) => {
      if (previousPageData && !previousPageData.products.length) return null;
      return `https://dummyjson.com/products?skip=${pageIndex * 12}&limit=12`;
    },
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            observer.disconnect();
            setSize(prev => prev + 1);
          }
        });
      },
      {
        threshold: 1.0,
      }
    );

    lastLi && observer.observe(lastLi);
  }, [lastLi]);

  if (!data) {
    return <div>데이터 없음</div>;
  }

  return (
    <>
      <ul className='flex flex-wrap gap-x-4 gap-y-8'>
        {data
          .map(response => response.products)
          .flat()
          .map((product, idx) => (
            <li //
              className='w-[calc((100%-2rem)/3)] cursor-pointer translate-y-0 hover:-translate-y-4 transition-all'
              key={product.id}
              onClick={() => navigate(`/${product.category}/${product.id}`)}
              ref={idx === data.map(response => response.products).flat().length - 1 ? setLastLi : null}
            >
              <ProductItem product={product} />
            </li>
          ))}
      </ul>
      {isValidating && <MainSkeleton />}
    </>
  );
};

export default MainList;
