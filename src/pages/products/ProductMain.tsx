import useSWR from 'swr';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ProductsResponse } from '../../interface';
import getFirstUpperString from '../../utils/getFirstUpperString';
import { fetcher } from './ProductList';
import { useNavigate } from 'react-router-dom';
import 'swiper/css/pagination';

interface ProductMainProps {
  category: string;
}

const ProductMain = ({ category }: ProductMainProps) => {
  const { data } = useSWR<ProductsResponse>(`https://dummyjson.com/products/category/${category}`, fetcher, { suspense: true });
  const navigate = useNavigate();

  if (!data) {
    return <div>없음</div>;
  }

  return (
    <div className='w-full relative overflow-hidden'>
      <h2 className='font-bold text-2xl'>{getFirstUpperString(category)}</h2>
      <Swiper //
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        className='w-full mt-4 relative'
        loop
        navigation={{
          nextEl: 'button.next',
          prevEl: 'button.prev',
        }}
        pagination={{
          el: 'div.bullet',
        }}
      >
        {data.products.map(product => (
          <SwiperSlide //
            className='select-none cursor-pointer w-[300px] overflow-hidden border border-gray-300 rounded-md'
            key={product.id}
            onClick={() => navigate(`/${category}/${product.id}`)}
          >
            <img className='aspect-square object-cover mb-4' src={product.thumbnail} alt={product.title} />
            <div className='p-2'>
              <h3 className='font-bold'>{getFirstUpperString(product.title)}</h3>
              <p className='text-gray-300 mt-4'>{getFirstUpperString(product.description)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex justify-center items-center gap-16 mt-12'>
        <button className='font-bold prev'>Prev</button>
        <div className='bullet flex justify-center gap-4' />
        <button className='font-bold next'>Next</button>
      </div>
    </div>
  );
};

export default ProductMain;
