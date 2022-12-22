const Button = ({ children, ...props }) => {
  return (
    <button
      className={`transition-text w-auto rounded-md px-6 py-3 text-md capitalize duration-200 hover:text-white ${
        props.otherCSS !== undefined ? props.otherCSS : 'bg-transparent'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
