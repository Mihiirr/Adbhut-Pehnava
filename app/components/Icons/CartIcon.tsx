import React from "react";

const CartIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 64 64"
      height="20"
      width="20"
      fillOpacity="1"
      stroke="white"
      strokeWidth="1.5"
      {...props}
    >
      <path
        fill="#D6D3D1"
        d="M14 17.44h46.79l-7.94 25.61H20.96l-9.65-35.1H3"
      ></path>
      <circle cx="27" cy="53" r="2"></circle>
      <circle cx="47" cy="53" r="2"></circle>
    </svg>
  );
};

export default CartIcon;
