import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceMonCompteFormation() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Mon Compte Formation - Mathilde Signol </title>
      </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Mon Compte Formation</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <p className='text2'>Site web ・ App ・ B2C</p>
            <Badges badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
                Refonte UX & UI de Mon Compte Formation, plateforme accompagnant les salariés à se former professionnellement.
            </p>
            <img src="/images/cpf-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Mon Compte Formation est un projet sociétal qui a pris une nouvelle dimension suite à la crise du 
            Covid-19, qui a amené un grand nombre de salariés français à se former pour se réorienter.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)] flex flex-col gap-[var(--spacing-xs)]'>
              <span> → Refondre l'UX & l'UI afin d'inclure de nouvelles fonctionnalités
                        et de respecter les normes d'accessibilité. </span>
              <span> → Mettre en place un Design System multi-produits (12) & multi-marques (2). </span>
              <span> → Construire & organiser la cellule UX, équipe de 9 Designers. </span>
            </p>
        </section>

        {/* DESIGN SYSTEM */}
        <section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/cpf-design-system.png" alt="design System de Mon Compte Formation"></img>
        </section>

        {/* ILLUSTRATIONS */}
        <section id="illustrations" className={sectionProps}>
            <h2 className='h2'>Illustrations</h2>
            <img src="/images/cpf-illustrations.png" alt="illustrations réalisées"></img>
        </section>

        {/* VISUELS */}
        <section id="visuels" className={sectionProps}>
            <h2 className='h2'>Visuels</h2>
            <img src="/images/cpf-visuels.png" alt="visuels réalisés à partir de photos retravaillées"></img>
        </section>

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/cpf-maquettes1.png" alt="maquettes de la page d'accueil, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/cpf-maquettes2.png" alt="maquettes du dossier de formation, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/cpf-maquettes3.png" alt="maquettes de la recherche de formation, en version mobile & desktop"></img>
        </section>

        {/* PROTOTYPES */}
        <section id="prototypes" className={sectionProps}>
            <h2 className='h2'>Prototypes</h2>
            <img src="/images/cpf-prototype.png" alt="prototype de la recherche de formation"></img>
        </section>

        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/acteur-bancaire'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/certificateurs'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
