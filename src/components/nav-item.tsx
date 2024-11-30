import Link from "next/link";
import React, { useReducer } from "react";
import Icon from "./icon";

const styles = {
  enableStyle: "bg-transparent text-[var(--color-black)]",
  size: {
    small: "py-[6px] px-[var(--spacing-xs)] text3 rounded-[5px]",
    medium: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text2 rounded-[var(--radius-xs)]",
    large: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text1 rounded-[calc(var(--radius-xs)+2px)]",
  },
  hoverStyle: "hover:shadow-[0_0_0_2px_var(--color-black)]",
  iconSpacing: {
    small: "gap-[var(--spacing-2xs)]",
    medium: "gap-[var(--spacing-xs)]",
    large: "gap-[var(--spacing-sm)]",
  },
  iconSize: {
    small: "var(--dimension-ml)",
    medium: "22px",
    large: "var(--dimension-l)",
  },
};

interface NavItemProps {
  text: string;
  size?: "small" | "medium" | "large";
  leadingIcon?: string;
  trailingIcon?: string;
  stateProp?: "enabled" | "hovered";
  href?: string
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  size = "medium",
  leadingIcon,
  trailingIcon,
  stateProp = "enabled",
  onClick,
  href,
}) => {
  const [isHovered, setHovered] = useReducer((state) => !state, stateProp === "hovered");

  // Define the text color based on hover state and type
  const appliedTextColor = "var(--color-black)"

  const navItemClasses = `
    w-full inline-flex items-center justify-between gap-[var(--spacing-ml)] transition ease-in-out duration-200 
    ${styles.size[size]} ${styles.enableStyle} ${styles.hoverStyle} ${styles.iconSpacing[size]}
  `;

  return (
    <Link href={href || "#"} passHref
        className={navItemClasses}
        onMouseEnter={setHovered}
        onMouseLeave={setHovered}
        onClick={onClick}
      >
        {/* Leading Icon */}
        {leadingIcon && (
          <Icon name={leadingIcon} size={styles.iconSize[size]} color="var(--color-symbol)"/>
        )}

        {/* Text */}
        <span className="flex-grow text-left" style={{ color: appliedTextColor }}>{text}</span>

        {/* Trailing Icon */}
        {trailingIcon && (
          <Icon name={trailingIcon} size={styles.iconSize[size]} color={appliedTextColor}/>
       )}
    </Link>
  );
};

export default NavItem;