const Button = ({ title, leftIcon,rightIcon, containerClass = '', id }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit overflow-hidden items-center gap-2 rounded-full bg-violet-50 px-7 py-3 text-black backdrop-blur-sm ${containerClass}`}
    >{leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">{title}</span>
      {rightIcon}
    </button>
  )
}

export default Button
