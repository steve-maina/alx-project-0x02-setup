import { ButtonProps } from "@/interfaces";

const Button = ({ size, shape, title }: ButtonProps) => {
  let width: number;
  let borderRadius: number;
  if (shape == "rounded-full") {
    borderRadius = 20;
  } else if (shape == "rounded-md") {
    borderRadius = 10;
  } else {
    borderRadius = 5;
  }
  if (size == "large") {
    width = 400;
  } else if (size == "medium") {
    width = 320;
  } else {
    width = 240;
  }
  return (
    <button
      style={{ width: width, borderRadius: borderRadius }}
      className={`block ${size} w-${width} border border-green-900 self-center m-4 p-1 bg-blue-200`}
    >
      {title}
    </button>
  );
};

export default Button;
