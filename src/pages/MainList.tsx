import { useEffect } from 'react';
import useInfiniteSWR from 'swr/infinite';
import ProductItem from '../components/ProductItem';
import { ProductsResponse } from '../interface';
import { fetcher } from './products/ProductList';

const url = `https://dummyjson.com/products?skip=5&limit=10`;

const MainList = () => {
  const { data, setSize } = useInfiniteSWR<ProductsResponse>((pageIndex, previousPageData: ProductsResponse) => {
    if (previousPageData && !previousPageData.products.length) return null;
    return `/users?page=${pageIndex}&limit=10`;
  }, fetcher);

  if (!data) {
    return <div>데이터 없음</div>;
  }

  return (
    <ul className='flex flex-wrap'>
      {/* {data.products.map(product => (
        <li key={product.id} className='w-[300px] overflow-hidden border border-gray-300 rounded-md'>
          <ProductItem product={product} />
        </li>
      ))} */}
    </ul>
  );
};

export default MainList;
