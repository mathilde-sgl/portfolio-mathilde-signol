//src/components/drawer.tsx

import React from "react";
import Link from "next/link";
import NavItem from "./nav-item"; 
import TextButton from "./text-button";
import type { IconName } from "./icon";

interface DrawerProps {
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  navItems: { label: string; size?:"large"; href: string; leadingIcon?: IconName; trailingIcon?: IconName }[];
  primaryAction?: { text: string; onClick: () => void; leadingIcon?: IconName }; 
  closeAction?: { text: string; onClick: () => void; leadingIcon?: IconName }; 
}

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    title,
    navItems,
    primaryAction,
    closeAction,
  }) => {
  
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-[var(--color-overlay)] backdrop-blur-sm z-40"
            onClick={onClose} // Ferme le drawer lorsqu'on clique sur l'overlay
          />
        )}
  
        <div
          className={`fixed top-0 right-0 h-full bg-[var(--color-dialog)] border-l border-[var(--color-divider)] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-800 ease-in-out z-50 w-full sm:w-[calc(100vw*2/3)] md:w-[560px]`}
        >
          {/* Header du drawer */}
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="h3">{title}</h1>
          </div>
  
          {/* Liste de navigation */}
          <div className="mt-6 px-6">
            <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.label}
                leadingIcon={item.leadingIcon}
                trailingIcon={item.trailingIcon}
                size={item.size || "large"}
                href={item.href}
                onClick={onClose} // ferme le drawer
              />
            ))}
            </ul>
          </div>
  
          {/* Liste des boutons */}
          <div className="absolute bottom-6 right-6 gap-4 inline-flex items-center justify-center">
            <TextButton
              text={closeAction?.text || "Fermer"} // Par défaut "Fermer"
              type="basic"
              size="medium"
              leadingIcon={closeAction?.leadingIcon || "close"} // Par défaut l'icône "close"
              onClick={onClose}
            />
  
            {primaryAction && (
              <TextButton
                text={primaryAction.text}
                type="flat"
                size="medium"
                leadingIcon={primaryAction.leadingIcon}
                onClick={primaryAction.onClick}
              />
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default Drawer;
