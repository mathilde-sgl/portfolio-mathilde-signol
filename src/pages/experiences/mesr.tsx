import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceMesr() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Cofolio</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <p className='text2'>Saas ・ B2C</p>
            <Badges badges={[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}></Badges>
            <p className='text1 max-w-[560px] pb-[var(--spacing-sm)]'>
                Création d'un dispositif ePortfolio pour valoriser une approche par compétences des étudiants français. <br />
            </p>
            <img src="/images/mesr-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* CHARTE GRAPHIQUE */}
        <section id="charte-graphique" className={sectionProps}>
            <h2 className='h2'>Charte Graphique</h2>
            <img src="/images/mesr-graphic-design.png" alt="charte graphique de Cofolio"></img>
        </section>

        {/* DESIGN SYSTEM */}
        <section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/mesr-design-system.png" alt="design System de Cofolio"></img>
        </section>

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/mesr-maquettes1.png" alt="3 maquettes montrant l'inferface Cofolio"></img>
        </section>

        <div id="main-actions" className='flex items-end justify-end pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir le projet suivant", onClick: () => router.push('/experiences/acteur-bancaire'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
    </div>
  );
}
