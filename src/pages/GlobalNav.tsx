import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from './products/ProductList';

const GlobalNav = () => {
  const { data: categories } = useSWR<string[]>('https://dummyjson.com/products/categories', fetcher, { suspense: true });
  const { pathname } = useLocation();

  const checkIsCategory = useCallback(
    (category: string) => {
      if (pathname === `/${category}` || pathname.includes(`/${category}/`)) {
        return true;
      } else {
        return false;
      }
    },
    [pathname]
  );

  if (!categories) {
    return <nav>통신 실패</nav>;
  }

  return (
    <nav className='border-b-[1px]'>
      <ul className='max-w-[1040px] mx-auto p-4 flex flex-wrap gap-y-2 gap-x-4'>
        {categories.map(category => (
          <li key={category}>
            <Link
              className={`block font-bold px-4 py-2 border-[1px]  rounded-full transition-all
                ${checkIsCategory(category) ? 'text-white bg-gray-600 border-gray-600' : 'text-gray-300 hover:text-gray-600 border-gray-300 hover:border-gray-600'}
              `}
              to={category}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlobalNav;
