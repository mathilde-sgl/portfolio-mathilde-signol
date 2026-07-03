//src/components/topBar.tsx

import React, { useState } from 'react';
import Button from './text-button';
import Link from 'next/link';
import Drawer from "./drawer";
import Icon, { type IconName } from "./icon";
import { useRouter } from 'next/router';
import Tab from "./tab";

export const TopBar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();

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

            {/* Navigation bureau : visible à partir de md */}
            <nav className="hidden md:flex items-center gap-[var(--spacing-l)]" aria-label="Navigation principale">
                <Tab
                    tabs={navItems.map((item) => ({
                        label: item.label,
                        targetPage: item.href,
                    }))}
                    defaultActiveIndex={navItems.findIndex((item) => item.href === router.pathname)}
                    onPageChange={(targetPage) => router.push(targetPage)}
                />
                <div className="shrink-0">
                    <Button
                        text="Me contacter"
                        type="flat"
                        leadingIcon="mail"
                        onClick={() => router.push('/#footer')}
                    />
                </div>
            </nav>

            {/* Bouton Menu pour écrans en dessous de md */}
            <div className="md:hidden">
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
                primaryAction={{
                    text: "Me contacter",
                    leadingIcon: "mail",
                    onClick: () => { setDrawerOpen(false); router.push('/#contactez-moi'); },
                }}
            />
        </div>
    );
};

export default TopBar;