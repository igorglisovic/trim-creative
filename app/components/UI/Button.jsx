const Button = ({ children, className }) => {
  return (
    <button
      className={`uppercase text-white bg-main-gradient px-10 py-3 rounded-full text-xs lg:text-sm font-semibold ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
