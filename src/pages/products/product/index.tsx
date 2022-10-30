import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Product } from '../../../interface';
import { fetcher } from '../ProductList';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSWR<Product>(`https://dummyjson.com/products/${id}`, fetcher, { suspense: true });

  if (!data) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className='flex flex-col w-[calc(100%-216px)]'>
      <h2 className='font-bold text-3xl pb-4 border-b'>{data.title}</h2>
      <div className='py-16 border-b'>
        <img src={data.thumbnail} alt={data.title} className='mx-auto w-[50%] aspect-square object-contain ' />
      </div>
      <ul className='w-[60%] mx-auto py-16 grid grid-cols-2 gap-x-4 gap-y-10'>
        {data.images.map(image => (
          <li key={image} className='flex justify-center items-center'>
            <img className='w-[200px] aspect-square object-contain' src={image} alt='thumbnails' />
          </li>
        ))}
      </ul>
      <p className='text-gray-600 mt-2 py-4 border-t'>{data.description}</p>
      <div className='flex flex-col items-end'>
        <p className='font-bold text-3xl'>${data.price}</p>
        <Link to={'/cart'} className='px-4 py-2 font-bold text-white text-right bg-gray-600 rounded-full my-6 cursor-pointer'>
          Get Cart!
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
