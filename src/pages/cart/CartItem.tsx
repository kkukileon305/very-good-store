import { CartProduct } from '../../interface';

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <li className='p-2 mb-4 border rounded-md'>
      <h4 className='font-bold border-b pb-2'>{product.title}</h4>
      <div className='flex justify-between pt-4'>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
      </div>
      <p className='text-right'>{product.total}</p>
    </li>
  );
};

export default CartItem;
