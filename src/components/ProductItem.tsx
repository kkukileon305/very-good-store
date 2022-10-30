import { Product } from '../interface';
import getFirstUpperString from '../utils/getFirstUpperString';

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <>
      <img className='min-h-[200px] aspect-square object-cover mb-4' src={product.thumbnail} alt={product.title} />
      <div className='p-2'>
        <h3 className='font-bold'>{getFirstUpperString(product.title)}</h3>
        <p className='text-gray-300 mt-4'>{getFirstUpperString(product.description)}</p>
      </div>
    </>
  );
};

export default ProductItem;
