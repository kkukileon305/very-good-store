import { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ListSkeleton from '../../skeleton/ListSkeleton';
import Product from './product';
import ProductList from './ProductList';

const Loading = ({ text }: { text: string }) => <p>{text}</p>;

const Products = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <div>잘못된 접근</div>;
  }

  return (
    <div className='flex gap-4'>
      <Suspense fallback={<ListSkeleton />}>
        <ProductList category={category} />
      </Suspense>
      <Suspense fallback={<Loading text='product 로딩' />}>
        <Routes>
          <Route path='/:id' element={<Product />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Products;
