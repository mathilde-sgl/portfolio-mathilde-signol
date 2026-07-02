import PropTypes from "prop-types";
import React, { useReducer } from "react";
import Icon, { type IconName } from "./icon";

const styles = {
  enableStyle: {
    flat: "bg-[var(--color-primary)] text-[var(--color-primary-contrast)]",
    outline: "border border-[var(--color-black)] bg-transparent text-[var(--color-black)] box-border",
    basic: "bg-transparent text-[var(--color-black)]",
  },
  size: {
    small: "py-[6px] px-[var(--spacing-xs)] text3 rounded-[5px]",
    medium: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text2 rounded-[var(--radius-xs)]",
    large: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text1 rounded-[calc(var(--radius-xs)+2px)]",
  },
  hoverStyle: {
    flat: "hover:bg-[var(--color-white)] hover:border-[var(--color-primary)] hover:outline hover:outline-2 hover:outline-[var(--color-primary)]",
    outline: "hover:outline hover:outline-2 hover:outline-[var(--color-black)]",
    basic: "hover:border-[var(--color-black)] hover:outline hover:outline-2 hover:outline-[var(--color-black)]",
  },
  iconSpacing: {
    small: "gap-[var(--spacing-3xs)]",
    medium: "gap-[var(--spacing-2xs)]",
    large: "gap-[var(--spacing-xs)]",
  },
  iconSize: {
    small: "var(--dimension-ml)",
    medium: "22px",
    large: "var(--dimension-l)",
  },
};

interface TextButtonProps {
  text: string;
  type?: "flat" | "outline" | "basic";
  size?: "small" | "medium" | "large";
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  stateProp?: "enabled" | "hovered";
  onClick?: () => void;
  ariaLabel?: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  text,
  type = "flat",
  size = "medium",
  leadingIcon,
  trailingIcon,
  stateProp = "enabled",
  onClick,
  ariaLabel,
}) => {
  const [isHovered, setHovered] = useReducer((state) => !state, stateProp === "hovered");

  // Define the text color based on hover state and type
  const appliedTextColor = isHovered
    ? type === "flat"
      ? "var(--color-primary)"        // Hover color for flat type
      : "var(--color-black)"          // Hover color for outline/basic types
    : type === "flat"
    ? "var(--color-primary-contrast)" // Default color for flat type
    : "var(--color-black)";           // Default color for outline/basic types

  const buttonClasses = `
    inline-flex items-center justify-center transition ease-in-out duration-200 
    ${styles.size[size]} ${styles.enableStyle[type]} ${styles.hoverStyle[type]} ${styles.iconSpacing[size]}
  `;

  return (
    <button
      className={buttonClasses}
      style={{ color: appliedTextColor }} // Apply text color to the entire button
      aria-label={ariaLabel}
      onMouseEnter={setHovered}
      onMouseLeave={setHovered}
      onClick={onClick}
    >
      {/* Leading Icon */}
      {leadingIcon && (
        <Icon name={leadingIcon} size={styles.iconSize[size]}/>
      )}

      {/* Button Text */}
      <span>{text}</span>

      {/* Trailing Icon */}
      {trailingIcon && (
        <Icon name={trailingIcon} size={styles.iconSize[size]}/>
      )}
    </button>
  );
};

export default TextButton;