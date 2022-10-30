import { Suspense } from 'react';
import CartSkeleton from '../../skeleton/CartSkeleton';
import CartList from './CartList';

const CartPage = () => {
  return (
    <div className='py-4'>
      <h2 className='font-bold text-2xl mb-4'>Cart</h2>
      <Suspense fallback={<CartSkeleton />}>
        <CartList />
      </Suspense>
    </div>
  );
};

export default CartPage;
