import React, { useState } from "react";
import Icon from "./icon";

// Interface pour chaque onglet
interface TabItem {
  label: string;
  content?: React.ReactNode;
  leadingIcon?: string;
  targetPage?: string; // Permet de spécifier une route ou un changement de page
}

// Props pour le composant Tab
interface TabProps {
  tabs: TabItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void; // Callback pour les changements d'onglet
  onPageChange?: (targetPage: string) => void; // Callback pour la navigation externe
}

const Tab: React.FC<TabProps> = ({
  tabs,
  defaultActiveIndex = 0,
  onTabChange,
  onPageChange, // Nouveau comportement
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    const targetPage = tabs[index]?.targetPage;

    if (targetPage && onPageChange) {
      // Si un `targetPage` est défini, utilise le callback `onPageChange`
      onPageChange(targetPage);
    } else {
      // Sinon, applique le comportement par défaut
      setActiveIndex(index);
      if (onTabChange) {
        onTabChange(index);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Barre d'onglets */}
      <div className="flex gap-4 border-d border-[var(--color-divider)]">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          // Classes dynamiques pour le bouton principal
          const buttonClasses = `group flex items-center gap-[var(--spacing-xs)] py-[var(--spacing-xs)] px-[var(--spacing-l)] border-b-2 ${
            isActive
              ? "border-[var(--color-primary)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:rounded-t-[10px] hover:text-[var(--color-primary-contrast)]"
              : "border-transparent text-[var(--color-black)] hover:bg-[var(--color-primary)] hover:rounded-t-[10px] hover:text-[var(--color-primary-contrast)]"
          }`;

          // Classes dynamiques pour l'icône
          const iconClasses = `group-hover:fill-[var(--color-primary-contrast)] ${
            isActive ? "fill-[var(--color-primary)]" : "fill-[var(--color-black)]"
          }`;

          // Classes dynamiques pour le texte
          const textClasses = `group-hover:text-[var(--color-primary-contrast)] ${
            isActive ? "text-[var(--color-primary)]" : "text-[var(--color-black)]"
          }`;

          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={buttonClasses}
            >
              {/* Leading Icon */}
              {tab.leadingIcon && (
                <Icon
                  name={tab.leadingIcon}
                  size="24px"
                  className={iconClasses}
                />
              )}

              {/* Texte de l'onglet */}
              {tab.label && <span className={textClasses}>{tab.label}</span>}
            </button>
          );
        })}
      </div>

      {/* Contenu des onglets (uniquement si `onPageChange` n'est pas défini) */}
      {!onPageChange && (
        <div className="mt-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={activeIndex === index ? "block" : "hidden"}
            >
              {tab.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tab;
