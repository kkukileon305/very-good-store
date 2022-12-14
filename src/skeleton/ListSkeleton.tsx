const ListSkeleton = () => {
  return (
    <ul className='max-w-[200px] w-full md:border-r pr-4'>
      {[...Array(5).keys()].map(key => (
        <li className='h-[40px] mb-2 bg-gray-300 rounded-md' key={key} />
      ))}
    </ul>
  );
};
export default ListSkeleton;
