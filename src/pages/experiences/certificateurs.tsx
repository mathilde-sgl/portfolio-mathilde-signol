import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceCertificateurs() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Certificateurs</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <p className='text2'>SaaS ・ B2B</p>
            <Badges badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Création d'une plateforme SaaS pour transmettre les certifications, 
            garantissant et certifiant la véracité des données qui alimentent le passeport de compétences.
            </p>
            <img src="/images/certificateurs-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/certificateurs-maquettes1.png" alt="maquettes de la page d'accueil, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/certificateurs-maquettes2.png" alt="maquettes du dossier de formation, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/certificateurs-maquettes3.png" alt="maquettes de la recherche de formation, en version mobile & desktop"></img>
        </section>

        <div id="main-actions" className='flex justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Aller au projet précédent", onClick: () => router.push('/experiences/moncompteformation'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir le projet suivant", onClick: () => router.push('/experiences/acteur-bancaire'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
    </div>
  );
}
