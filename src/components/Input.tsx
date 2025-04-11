import React from "react";

interface InputProps {
  size: "small" | "medium" | "large";
  borderColor: "primary" | "secondary";
  placeholder: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { size, borderColor, placeholder } = props;

  const defaultClass = "w-full px-3 py-2 rounded-md"; // Changed w-100 to w-full for better clarity
  const classes = {
    sizes: {
      small: "text-sm h-8",
      medium: "text-base h-10",
      large: "text-lg h-12",
    },
    borderColors: {
      primary: "border border-gray-300",
      secondary: "border border-gray-500",
    },
  };

  return (
    <input
      type="text"
      className={`${defaultClass} ${classes.sizes[size]} ${classes.borderColors[borderColor]}`}
      placeholder={placeholder}
    />
  );
};