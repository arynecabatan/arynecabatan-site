export const AllProjectHeader = () => {
  return (
    <div className="h-64 sm:h-80 flex flex-col text-center justify-center gap-3 w-full relative">
      <div className='w-full h-full object-cover transition-all dark:bg-[url("/patternpad-dark.svg")] bg-[url("/patternpad-light.svg")] opacity-10 bg-no-repeat bg-cover' />
      <div className="w-full h-auto absolute">
        <h1 className="gradient-text text-5xl">All Projects</h1>
      </div>
    </div>
  );
};
