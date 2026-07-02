//src/components/bottomBar

import Link from 'next/link';
import ButtonsList from '@/components/buttons-list';
import { useState } from 'react';

export const BottomBar = () => {
    return (
        <footer id="footer" className="flex flex-col sm:flex-row bg-[var(--color-card)] w-full items-center justify-between px-6 pt-10 pb-8 md:px-8 gap-[var(--spacing-2xl)]">
            {/*Connectons-nous*/}
            <div className="flex flex-col items-center gap-[var(--spacing-sm)]">
                <div className='flex flex-row gap-[var(--spacing-xl)]'>
                    <Link 
                        href="https://www.linkedin.com/in/mathilde-signol" 
                        className="cursor-pointer group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                        src="/images/logoSocialMedialinkedIn.png" 
                        alt="Lien LinkedIn" 
                        className="h-10 w-10 rounded-[4px] outline outline-2 outline-offset-2 outline-transparent group-hover:outline-[var(--color-black)]" 
                        />
                    </Link>

                    <Link 
                        href="https://www.malt.fr/profile/mathildesignol" 
                        className="cursor-pointer group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                        src="/images/logoSocialMediaMalt.png" 
                        alt="Lien LinkedIn" 
                        className="h-10 w-10 rounded-full outline outline-2 outline-offset-2 outline-transparent group-hover:outline-[var(--color-black)]" 
                        />
                    </Link>
                </div>
            </div>

            <p className='text2 text-center'>Bordeaux ・ Paris ・ Toulouse ・ Remote</p>
            <p className='text2 text-center'>© 2026 - Mathilde Signol - Lead UX UI Designer</p>

        </footer>
    );
};

export default BottomBar;