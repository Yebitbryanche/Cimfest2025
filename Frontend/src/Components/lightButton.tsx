import Button, { type ButtonProps } from "./Button";

export function LightButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`text-white hover:text-gray-300 ${props.className}`}
    />
  );
}
