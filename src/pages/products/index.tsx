import { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ListSkeleton from '../../skeleton/ListSkeleton';
import ProductSkeleton from '../../skeleton/ProductSkeleton';
import Product from './product';
import ProductList from './ProductList';
import ProductMain from './ProductMain';

const Products = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <div>잘못된 접근</div>;
  }

  return (
    <div className='md:flex gap-4 py-4 overflow-hidden'>
      <Suspense fallback={<ListSkeleton />}>
        <ProductList category={category} />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <Routes>
          <Route path='/:id' element={<Product />} />
          <Route path='/' element={<ProductMain category={category} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Products;
