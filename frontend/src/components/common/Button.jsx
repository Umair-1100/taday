import clsx from "clsx";

const Button = ({
  as: Component = "button",
  href,
  className,
  onClick,
  icon,
  children,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <Component
      href={Component === "a" ? href : undefined}
      type={Component === "button" ? type : undefined}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      className={clsx(
        "text-sm cursor-pointer inline-flex items-center px-4 py-2 rounded-md font-normal transition",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;
