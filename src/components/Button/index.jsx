const Button = ({ children, ...props }) => {
  return (
    <button
      className={`capitalize text-md rounded-md px-6 py-3 w-auto hover:text-white transition-text duration-200 ${
        props.otherCSS !== undefined ? props.otherCSS : 'bg-transparent'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
