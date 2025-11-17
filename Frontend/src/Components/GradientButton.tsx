import Button, { type ButtonProps } from "./Button";

export function GradientButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`text-white bg-gradient-to-r from-[#D37CFF] to-[#A855F7] ${props.className}`}
    />
  );
}
