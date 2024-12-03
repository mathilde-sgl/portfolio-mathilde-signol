import React, { useState } from 'react';
import '../app/globals.css';
import Button from './text-button';
import Link from 'next/link';
import Icon from './icon';

export const BottomBar = () => {
    return (
        <footer className="flex flex-col bg-[var(--color-card)] w-full items-center justify-between px-6 py-8 md:px-8 gap-[var(--spacing-2xl)]">

            <div className="flex flex-col items-center gap-[var(--spacing-sm)]">
                <h5 className='text2 uppercase'>Contactez-moi</h5>
                <span className='text1'>mathilde.signol.pro@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-sm)]">
                <h5 className='text2 uppercase'>Connectons-nous</h5>
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
                        className="h-12 w-12 rounded-[4px] outline outline-2 outline-offset-2 outline-transparent group-hover:outline-[var(--color-black)]" 
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
                        className="h-12 w-12 rounded-full outline outline-2 outline-offset-2 outline-transparent group-hover:outline-[var(--color-black)]" 
                        />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-sm)]">
                <h5 className='text2 uppercase'>Disponible sur :</h5>
                <div className='flex flex-row space-x-[var(--spacing-sm)] items-center pb-[var(--spacing-l)]'>
                    <span className='text1'>Bordeaux ・ Paris ・ Toulouse </span>
                </div>
            </div>

            <p className='text2'>© 2024 Mathilde Signol - UX UI Designer Senior - Tous droits réservés.</p>
            

        </footer>
    );
};

export default BottomBar;