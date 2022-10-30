const NavSkeleton = () => {
  return (
    <ul className='max-w-[1040px] w-full mx-auto p-4 flex flex-wrap gap-x-4 gap-y-2'>
      {[...Array(10).keys()].map(key => (
        <li className='w-[200px] h-[42px] bg-gray-300 rounded-full' key={key} />
      ))}
    </ul>
  );
};

export default NavSkeleton;
