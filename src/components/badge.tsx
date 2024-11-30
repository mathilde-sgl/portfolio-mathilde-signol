import React from "react";
import Icon from "./icon";

const styles = {
  size: {
    small: "py-[6px] px-[var(--spacing-xs)] text3 rounded-[5px]",
    medium: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text2 rounded-[var(--radius-xs)]",
    large: "py-[var(--spacing-xs)] px-[var(--spacing-sm)] text1 rounded-[calc(var(--radius-xs)+2px)]",
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

interface BadgeProps {
  text: string;
  size?: "small" | "medium" | "large";
  leadingIcon?: string;
}

interface BadgesProps {
  badges: BadgeProps[];
}

const Badges: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <div className="flex flex-wrap gap-4 w-full border-d border-[var(--color-divider)]">
      {badges.map((badge, index) => {
        const badgeClasses = `
          inline-flex items-center justify-center transition ease-in-out duration-200 border border-b border-[var(--color-divider)]
          ${styles.size[badge.size || "medium"]} ${styles.iconSpacing[badge.size || "medium"]} whitespace-nowrap
        `;

        return (
          <div key={index} className={badgeClasses}>
            {badge.leadingIcon && (
              <Icon name={badge.leadingIcon} size={styles.iconSize[badge.size || "medium"]} />
            )}
            <span>{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Badges;

