const Container = ({ children }) => {
  return (
    <div
    
      className="snap-container   h-screen w-screen flex flex-col  mx-auto "
    >
      {children}
    </div>
  );
};
export default Container;
