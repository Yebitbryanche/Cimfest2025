
import type { ReactNode } from "react";

export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode; // ← add this
}

function Button({  children, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium cursor-pointer bg-[#1F1F25] text-white hover:bg-[#2A2A32] ${className}`}
    >
      {children} 
    </button>
  );
}

export default Button;
