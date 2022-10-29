import { Link, useLocation } from 'react-router-dom';

const categories = [
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
];

const GlobalNav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <div>
        <div className='border-b-[1px] border-gray-300'>
          <h1 className='max-w-[1040px] mx-auto p-4 font-bold text-xl'>
            <Link to={'/'}>Very Good App</Link>
          </h1>
        </div>
        <ul className='max-w-[1040px] mx-auto p-4 flex flex-wrap gap-y-2 gap-x-4 mt-2'>
          {categories.map(category => (
            <li key={category}>
              <Link
                className={`block font-bold px-4 py-2 border-[1px]  rounded-full transition-all
                ${pathname.includes(category) ? 'text-white bg-gray-600 border-gray-600' : 'text-gray-300 hover:text-gray-600 border-gray-300 hover:border-gray-600'}
              `}
                to={category}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default GlobalNav;
