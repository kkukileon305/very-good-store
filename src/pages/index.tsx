import { Suspense } from 'react';
import MainList from './MainList';

const Main = () => {
  return (
    <div className='py-16'>
      <h2>Today's products</h2>
      <Suspense fallback={<p>loading...</p>}>
        <MainList />
      </Suspense>
    </div>
  );
};

export default Main;
