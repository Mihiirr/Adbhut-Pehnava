import { Link } from "@remix-run/react";
import React from "react";

type ButtonSizes = "xlarge" | "large" | "medium" | "small";

type Props = {
  size?: ButtonSizes;
};

const SizeVariantStyles: {
  [size in ButtonSizes]: Record<string, string>;
} = {
  xlarge: {
    text: "text-6xl lg:text-7xl",
    font: "font-logo",
  },
  large: {
    text: "text-4xl lg:text-5xl",
    font: "font-logo",
  },
  medium: {
    text: "text-xl lg:text-3xl",
    font: "font-logo",
  },
  small: {
    text: "text-lg lg:text-2xl",
    font: "font-logo",
  },
};

const Logo: React.FC<Props> = (props) => {
  const { size = "large" } = props;
  const sizeStyles = SizeVariantStyles[size];
  return (
    <Link to="/">
      <div className={Object.values(sizeStyles).join(" ")}>Glammy Girl</div>
    </Link>
  );
};

export default Logo;
