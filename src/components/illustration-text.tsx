import React from "react";
import Icon from "./icon";

const styles = {
  size: {
    small: "text3",
    medium: "text2",
    large: "text1",
  },
  illustrationSpacing: {
    small: "gap-[var(--spacing-sm)]",
    medium: "gap-[var(--spacing-ml)]",
    large: "gap-[var(--spacing-l)]",
  },
  illustrationSize: {
    small: "var(--dimension-xl)",
    medium: "var(--dimension-2xl)",
    large: "64px",
  },
  illustrationRadius: {
    small: "5px",
    medium: "var(--radius-xs)",
    large: "var(--radius-sm)",
  },
};

interface IllustrationTextProps {
  text: string;
  size?: "small" | "medium" | "large";
  leadingIllustration?: string;
  trailingIllustration?: string;
}

interface IllustrationTextsProps {
  illustrationTexts: IllustrationTextProps[];
}

const IllustrationTexts: React.FC<IllustrationTextsProps> = ({ illustrationTexts }) => {
  
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      {illustrationTexts.map((illustrationText, index) => {
        const illustrationTextsClasses = `
          inline-flex items-center justify-center transition ease-in-out duration-200
          ${styles.size[illustrationText.size || "medium"]} 
          ${styles.illustrationRadius[illustrationText.size || "medium"]}
          ${styles.illustrationSpacing[illustrationText.size || "medium"]} whitespace-nowrap
        `;

        // Fonction pour déterminer si l'illustration est une image ou une icône
        const isImage = (illustration: string | undefined) =>
          illustration && (illustration.endsWith(".png") || illustration.endsWith(".jpg") || illustration.endsWith(".jpeg"));

        return (
          <div key={index} className={illustrationTextsClasses}>
            {illustrationText.leadingIllustration && (
              isImage(illustrationText.leadingIllustration) ? (
                <img
                  src={illustrationText.leadingIllustration}
                  alt={illustrationText.text}
                  className="rounded"
                  style={{
                    width: styles.illustrationSize[illustrationText.size || "medium"],
                    height: styles.illustrationSize[illustrationText.size || "medium"],
                    borderRadius: styles.illustrationRadius[illustrationText.size || "medium"],
                  }}
                />
              ) : (
                <Icon
                  name={illustrationText.leadingIllustration}
                  size={styles.illustrationSize[illustrationText.size || "medium"]}
                />
              )
            )}
            <span>{illustrationText.text}</span>
            {illustrationText.trailingIllustration && (
              isImage(illustrationText.trailingIllustration) ? (
                <img
                  src={illustrationText.trailingIllustration}
                  alt={illustrationText.text}
                  className="rounded"
                  style={{
                    width: styles.illustrationSize[illustrationText.size || "medium"],
                    height: styles.illustrationSize[illustrationText.size || "medium"],
                    borderRadius: styles.illustrationRadius[illustrationText.size || "medium"],
                  }}
                />
              ) : (
                <Icon
                  name={illustrationText.trailingIllustration}
                  size={styles.illustrationSize[illustrationText.size || "medium"]}
                />
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default IllustrationTexts;

