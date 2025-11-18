import Button, { type ButtonProps } from "./Button";

export function DarkButton({ className = "", children, title, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      title={title} // pass title down
      className={`bg-[#1F1F25] text-white hover:bg-[#2A2A32] ${className}`}
    >
      {children ?? title} 
    </Button>
  );
}
