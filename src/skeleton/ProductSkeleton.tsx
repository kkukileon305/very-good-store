const ProductSkeleton = () => {
  return (
    <div className='flex flex-col w-[calc(100%-216px)]'>
      <div className='font-bold w-[200px] h-[36px] text-3xl border-b bg-gray-300 rounded-md' />
      <div className='py-16'>
        <div className='mx-auto w-[50%] aspect-square object-contain bg-gray-300' />
      </div>
    </div>
  );
};

export default ProductSkeleton;
