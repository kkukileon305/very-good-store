const CartSkeleton = () => {
  return (
    <>
      {[...Array(4).keys()].map(key => (
        <div
          key={key} //
          className='h-[74px] mb-4 bg-gray-300 rounded-lg '
        />
      ))}
    </>
  );
};

export default CartSkeleton;
