import useSWR from 'swr';
import { CartResponse } from '../../interface';
import { fetcher } from '../products/ProductList';
import CartItem from './CartItem';

import 'swiper/css';

const CartList = () => {
  const { data } = useSWR<CartResponse>('https://dummyjson.com/carts/2', fetcher, { suspense: true });

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <ul>
      {data.products.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CartList;
