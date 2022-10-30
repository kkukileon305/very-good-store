const CartSkeleton = () => {
  return (
    <>
      {[...Array(4).keys()].map(key => (
        <div
          key={key} //
          className='h-[74px] mb-4 bg-gray-300 rounded-lg '
        />
      ))}
      <div className='flex justify-end'>
        <div className='h-[36px] bg-gray-300 w-[200px] rounded-md' />
      </div>
    </>
  );
};

export default CartSkeleton;
