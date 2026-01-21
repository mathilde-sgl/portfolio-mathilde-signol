//src/components/topBar.tsx

import React, { useState } from 'react';
import Button from './text-button';
import Link from 'next/link';
import Drawer from "./drawer";
import Icon, { type IconName } from "./icon";

export const TopBar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const navItems = [
        { label: "Accueil", href: "/", leadingIcon: "home", trailingIcon: "arrow-next"},
        { label: "Mes expertises", href: "/expertises", leadingIcon: "competencies", trailingIcon: "arrow-next"},
        { label: "Mes expériences", href: "/experiences", leadingIcon: "experiences", trailingIcon: "arrow-next"},
        { label: "Mes formations", href: "/formations", leadingIcon: "degrees", trailingIcon: "arrow-next"},
        ] satisfies Array<{
            label: string;
            href: string;
            leadingIcon?: IconName;
            trailingIcon?: IconName;
            size?: "large";
        }>;
        //];

    return (
        <div className="fixed bg-[#fdfdfd] top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 border-b border-[var(--color-divider)] md:px-8">
            {/* Section du logo alignée à gauche */}
            <div className="flex items-center">
                <Link href="/">
                    <div className="cursor-pointer group">
                    <img 
                        src="/images/ms-logo.svg" 
                        alt="Logo Mathilde Signol" 
                        className="h-12 w-12 rounded-full outline outline-2 outline-offset-2 outline-transparent group-hover:outline-[var(--color-black)]" 
                    />
                    </div>
                </Link>
            </div>

            {/* Bouton Menu pour écrans en dessous de 600px */}
            <div>
                <Button
                    text={isDrawerOpen ? 'Fermer' : 'Menu'}
                    type="basic"
                    leadingIcon={isDrawerOpen ? 'close' : 'menu'}
                    onClick={() => setDrawerOpen(prev => !prev)}
                />
            </div>

            {/* Drawer */}
            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="Découvrez mon univers"
                navItems={navItems}
            />
        </div>
    );
};

export default TopBar;