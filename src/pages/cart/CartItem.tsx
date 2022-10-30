import { CartProduct } from '../../interface';

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <li className='p-2 mb-4 border rounded-md flex items-center justify-between'>
      <div>
        <h4 className='font-bold pb-2'>{product.title}</h4>
        <p>Quantity: {product.quantity}</p>
      </div>
      <p className='text-right font-bold text-xl flex gap-1 items-center'>
        <span className='font-light text-sm'>$</span>
        {product.total}
      </p>
    </li>
  );
};

export default CartItem;
