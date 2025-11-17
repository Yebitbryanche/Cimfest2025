import Button, { type ButtonProps } from "./Button";

export function DarkButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`bg-[#1F1F25] text-white hover:bg-[#2A2A32] ${props.className}`}
    />
  );
}
