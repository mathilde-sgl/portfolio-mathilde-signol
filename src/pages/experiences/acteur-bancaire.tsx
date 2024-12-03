import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceActeurBancaire() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Marketplace</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <p className='text2'>Saas ・ B2E</p>
            <Badges badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
                Refonte UX & UI de la Marketplace, plateforme e-commerce des produits utilisés dans le cadre de leur travail les collaborateurs de cet acteur bancaire. <br />
                Mise en place & gestion du Design System de l'équipe.
            </p>
            <img src="/images/acteurbancaire-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* LOGOS */}
        <section id="logos" className={sectionProps}>
            <h2 className='h2'>Logos</h2>
            <img src="/images/acteurbancaire-graphic-design.png" alt="déclinaisons des logos Marketplace"></img>
        </section>*

        {/* DESIGN SYSTEM */}
        {/*<section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/mesr-design-system.png" alt="design System de Cofolio"></img>
        </section>*/}

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/acteurbancaire-maquettes1.png" alt="maquettes de la page d'accueil, light mode & dark mode" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/acteurbancaire-maquettes2.png" alt="maquettes affichant la liste des produits d'un Product Owner" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/acteurbancaire-maquettes3.png" alt="maquettes affichant le cockpit d'un produit"></img>
        </section>

        <div id="main-actions" className='flex items-end justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'> 
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Aller au projet précédent", onClick: () => router.push('/experiences/mesr'), leadingIcon: "arrow-back",}}             
            />    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir le projet suivant", onClick: () => router.push('/experiences/moncompteformation'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
    </div>
  );
}
