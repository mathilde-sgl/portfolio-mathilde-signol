import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceMonCompteFormation() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
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
                Mise en place & gestion du Design System utilisé par 12 plateformes. Construction de la cellule UX, équipe de 9 Designers.
            </p>
            <img src="/images/cpf-intro.png" alt="maquettes montrant l'interface graphique"></img>
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

        <div id="main-actions" className='flex justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>    
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Aller au projet précédent", onClick: () => router.push('/experiences/acteur-bancaire'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir le projet suivant", onClick: () => router.push('/experiences/certificateurs'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
    </div>
  );
}
