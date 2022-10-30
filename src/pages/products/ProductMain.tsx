import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import useSWR from 'swr';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { ProductsResponse } from '../../interface';
import getFirstUpperString from '../../utils/getFirstUpperString';
import { fetcher } from './ProductList';
import 'swiper/css/pagination';
import styles from './bullet.module.css';
import ProductItem from '../../components/ProductItem';

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
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        className='w-full my-16 relative'
        loop
        navigation={{
          nextEl: 'button.next',
          prevEl: 'button.prev',
        }}
        pagination={{
          el: 'div.bullet',
          renderBullet: (index, className) => `<div class="${className} ${styles.bullet}">${index + 1}</div>`,
          clickable: true,
        }}
        autoplay
      >
        {data.products.map(product => (
          <SwiperSlide //
            className='select-none cursor-pointer w-[300px] overflow-hidden border border-gray-300 rounded-md'
            key={product.id}
            onClick={() => navigate(`/${category}/${product.id}`)}
          >
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex justify-center items-center gap-12 mt-12'>
        <button className='font-bold prev'>
          <BsArrowLeftShort size={20} />
        </button>
        <div className='bullet !w-fit flex justify-center gap-4' />
        <button className='font-bold next'>
          <BsArrowRightShort size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductMain;
