import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages';
import CartPage from './pages/cart';
import Footer from './pages/Footer';
import GlobalNav from './pages/GlobalNav';
import Products from './pages/products';
import NavSkeleton from './skeleton/NavSkeleton';

const App = () => {
  return (
    <>
      <div className='border-b-[1px] border-gray-300'>
        <h1 className='max-w-[1040px] mx-auto p-4 font-bold text-xl'>
          <Link to={'/'}>Very Good App</Link>
        </h1>
      </div>
      <Suspense fallback={<NavSkeleton />}>
        <GlobalNav />
      </Suspense>
      <div className='max-w-[1040px] mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:category/*' element={<Products />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
