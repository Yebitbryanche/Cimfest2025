export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

function Button({ title, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-4 py-2 rounded-md font-medium cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
