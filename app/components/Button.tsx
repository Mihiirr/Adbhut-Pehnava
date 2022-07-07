import React from "react";

const variantProps = {
  primary: {
    className:
      "h-full lg:h-10 w-full p-2 border-2 rounded-sm text-xs lg:text-base text-stone-600 flex items-center justify-center border-stone-600 bg-white hover:bg-stone-100 active:bg-stone-200",
  },
  secondary: {
    className:
      "h-10 lg:h-10 w-full p-2 flex items-center justify-center bg-stone-600 text-stone-300 text-base lg:text-xl rounded-sm",
  },
  danger: {
    className:
      "h-20 lg:h-10 p-2 w-full flex items-center justify-center bg-red-500 text-white text-4xl lg:text-lg rounded-sm hover:bg-red-600 active:bg-red-700",
  },
};

const Button: React.FC<
  Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className"
  > & {
    variant?: keyof typeof variantProps;
  }
> = ({ children, variant = "primary", ...btnProps }) => {
  return (
    <button type="button" {...variantProps[variant]} {...btnProps}>
      {children}
    </button>
  );
};

export default Button;
