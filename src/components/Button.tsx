import React from "react";

interface ButtonProps {
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
  title: string;
  onClick: () => void; // or (event: React.MouseEvent<HTMLButtonElement>) => void if you need the event
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { size, color, title, onClick } = props;

  // класс по умолчанию
  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: {
        button: "bg-gray-500",
        text: "text-red",
      },
      secondary: {
        button: "bg-red-500",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      medium: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };

  return (
    <button
      className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color].button}`}
      onClick={onClick}
    >
      <div className={classes.colors[color].text}>{title}</div>
    </button>
  );
};