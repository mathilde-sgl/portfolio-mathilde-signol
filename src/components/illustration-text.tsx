import React from "react";
import Icon, { type IconName } from "./icon";

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
} as const;

type Illustration =
  | { type: "icon"; name: IconName }
  | { type: "image"; src: string; alt?: string };

interface IllustrationTextProps {
  text: string;
  size?: "small" | "medium" | "large";
  leadingIllustration?: Illustration;
  trailingIllustration?: Illustration;
}

interface IllustrationTextsProps {
  illustrationTexts: IllustrationTextProps[];
}

function assertPublicImagesPath(src: string) {
  // On force public/images -> accessible via /images/...
  if (!src.startsWith("/images/")) {
    throw new Error(
      `Image src must start with "/images/". Received: "${src}". Put the file in public/images and use "/images/xxx.png".`
    );
  }
  if (!src.endsWith(".png")) {
    throw new Error(
      `Only .png images are allowed. Received: "${src}".`
    );
  }
}

function IllustrationView({
  illustration,
  text,
  size = "medium",
}: {
  illustration: Illustration;
  text: string;
  size?: "small" | "medium" | "large";
}) {
  const dim = styles.illustrationSize[size];
  const radius = styles.illustrationRadius[size];

  if (illustration.type === "image") {
    assertPublicImagesPath(illustration.src);

    return (
      <img
        src={illustration.src}
        alt={illustration.alt ?? text}
        style={{
          width: dim,
          height: dim,
          borderRadius: radius,
        }}
      />
    );
  }

  return <Icon name={illustration.name} size={dim} />;
}

const IllustrationTexts: React.FC<IllustrationTextsProps> = ({ illustrationTexts }) => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      {illustrationTexts.map((item, index) => {
        const size = item.size ?? "medium";

        const classes = `
          inline-flex items-center justify-center transition ease-in-out duration-200
          ${styles.size[size]}
          ${styles.illustrationSpacing[size]} whitespace-nowrap
        `;

        return (
          <div key={index} className={classes}>
            {item.leadingIllustration && (
              <IllustrationView illustration={item.leadingIllustration} text={item.text} size={size} />
            )}

            <span>{item.text}</span>

            {item.trailingIllustration && (
              <IllustrationView illustration={item.trailingIllustration} text={item.text} size={size} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default IllustrationTexts;