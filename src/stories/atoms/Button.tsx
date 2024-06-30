import { css } from "@emotion/react";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}

const buttonStyle = css({
  background: "#fff",
});
const sizeStyles = {
  sm: {},
  md: {
    padding: "0 2rem",
    height: "80px",
  },
  lg: {},
};

export const Button = ({ size = "md", label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      css={css(buttonStyle, { ...sizeStyles[size] })}
      {...props}
    >
      {label}
    </button>
  );
};
