const MainSkeleton = () => {
  return (
    <div className='flex flex-wrap gap-x-4 gap-y-8'>
      {[...Array(12).keys()].map(key => (
        <div className='w-[calc((100%-32px)/3)] h-[469px] ' key={key}>
          <div className='h-[325px] mb-4 bg-gray-300' />
          <div className='p-2'>
            <div className='w-[20%] h-4 mb-4 bg-gray-300' />
            <div className='w-full h-4 mb-4 bg-gray-300' />
            <div className='w-[80%] h-4 bg-gray-300' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSkeleton;
