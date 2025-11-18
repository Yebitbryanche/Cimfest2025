import Button, { type ButtonProps } from "./Button";

export function GradientButton({ className = "", children, title, ...props }: ButtonProps) {
  return (
    
    <Button
      {...props}
      title={title} // pass title down
       className={`text-white bg-gradient-to-r from-[#D37CFF] to-[#A855F7] ${className}`}
    >
      {children ?? title} 
    </Button>
  );
}
