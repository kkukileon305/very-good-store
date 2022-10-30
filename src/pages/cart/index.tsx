import { Suspense } from 'react';
import CartList from './CartList';

const CartPage = () => {
  return (
    <div className='py-4'>
      <h2 className='font-bold text-2xl'>Cart</h2>
      <Suspense>
        <CartList />
      </Suspense>
    </div>
  );
};

export default CartPage;
