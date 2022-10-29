import { Route, Routes } from 'react-router-dom';
import Main from './pages';
import Footer from './pages/Footer';
import GlobalNav from './pages/GlobalNav';
import Products from './pages/products';

const App = () => {
  return (
    <>
      <GlobalNav />
      <div className='max-w-[1040px] mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:category/*' element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
