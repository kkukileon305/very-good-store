import { Suspense } from 'react';
import MainSkeleton from '../skeleton/MainSkeleton';
import MainList from './MainList';

const Main = () => {
  return (
    <div className='py-16'>
      <h2 className='font-bold text-3xl mb-4'>Today's products</h2>
      <p className='my-4 text-gray-600'>Good</p>
      <Suspense fallback={<MainSkeleton />}>
        <MainList />
      </Suspense>
    </div>
  );
};

export default Main;
