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
        <div className='max-w-[1040px] mx-auto p-4 flex justify-between items-end'>
          <h1 className='font-bold text-xl'>
            <Link to={'/'}>
              Very Good Store <span className='ml-2 text-gray-300 text-sm'>VGS</span>{' '}
            </Link>
          </h1>
          <Link to='/cart'>Cart</Link>
        </div>
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
