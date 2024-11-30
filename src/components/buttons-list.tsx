import React, { useState } from "react";
import Icon from "./icon";
import TextButton from "./text-button";

const styles = {
  gap: {
    small: "gap-[var(--spacing-sm)]",
    medium: "gap-[var(--spacing-ml)]",
    large: "gap-[var(--spacing-l)]",
  },
  size: {
    small: "small",
    medium: "medium",
    large: "large",
  },
}

interface ListProps {
  size? : "large" | "medium" | "small"
  primaryAction?: { text: string; onClick: () => void; leadingIcon?: string; trailingIcon?: string };
  secondaryAction?: { text: string; onClick: () => void; leadingIcon?: string; trailingIcon?: string };
  tertiaryAction?: { text: string; onClick: () => void; leadingIcon?: string; trailingIcon?: string };
}

const ButtonsList: React.FC<ListProps> = ({size="medium", primaryAction, secondaryAction, tertiaryAction }) => {
  return (
    <div className={`inline-flex items-center justify-center ${styles.gap[size]}`}>
      {tertiaryAction && (
        <TextButton
        text={tertiaryAction?.text}
        type="basic"
        size={size}
        leadingIcon={tertiaryAction?.leadingIcon}
        onClick={tertiaryAction?.onClick}
        />
      )}
      {secondaryAction && (
        <TextButton
          text={secondaryAction.text}
          type="outline"
          size={size} 
          leadingIcon={secondaryAction.leadingIcon}
          onClick={secondaryAction.onClick}
        />
      )}
      {primaryAction && (
        <TextButton
          text={primaryAction.text}
          type="flat"
          size={size}
          leadingIcon={primaryAction.leadingIcon}
          onClick={primaryAction.onClick}
        />
      )}
    </div>
  );
};

export default ButtonsList;
