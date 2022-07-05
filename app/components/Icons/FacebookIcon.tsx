import React from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 32 32"
      height="20"
      width="20"
      fillOpacity="1"
      stroke="white"
      strokeWidth="1.5"
      {...props}
    >
      <path
        fill="#D6D3D1"
        d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
