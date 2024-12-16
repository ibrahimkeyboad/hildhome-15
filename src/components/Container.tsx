function Container({ children }: { children: React.ReactNode }) {
  return (
    //Todo fix number of child in the grid in largest width

    <div className='grid px-4 mt-8 md:px-6 gap-x-4 gap-y-7 transition-all grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]'>
      {children}
      {children}
    </div>
  );
}

export default Container;
