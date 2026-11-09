// src/components/Container.jsx
const Container = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 w-full">
      {children}
    </div>
  );
};

export default Container;
