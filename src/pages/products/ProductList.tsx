import { Link, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { ProductsResponse } from '../../interface';

interface ProductListProps {
  category: string;
}

export const fetcher = (url: string) => fetch(url).then(res => res.json());

const ProductList = ({ category }: ProductListProps) => {
  const { pathname } = useLocation();
  const { data } = useSWR<ProductsResponse>(`https://dummyjson.com/products/category/${category}`, fetcher, {
    suspense: true,
  });

  if (!data) {
    return <h2>데이터가 없습니다.</h2>;
  }

  return (
    <ul className='md:max-w-[200px] w-full break-keep md:border-r pr-4'>
      {data.products.map(product => (
        <li key={product.id}>
          <Link
            className={`block p-2 mb-2 rounded-md transition-all
            ${`/${category}/${product.id}` === pathname ? 'text-white bg-gray-600' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-300'}
          `}
            to={`/${category}/${product.id}`}
          >
            {product.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
