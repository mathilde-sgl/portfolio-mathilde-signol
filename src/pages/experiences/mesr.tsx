import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceMesr() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Cofolio - Mathilde Signol </title>
      </Head>
      
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
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Saas ・ B2C</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <p className='text2 !font-semibold'>2024</p>
            </div>
            <Badges badges={[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}></Badges>
            <p className='text1 max-w-[560px] pb-[var(--spacing-sm)]'>
                Création d'un dispositif ePortfolio pour valoriser une approche par compétences des étudiants français. <br />
            </p>
            <img src="/images/mesr-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Le ministère de l'éducation supérieure et la recherche souhaite innover dans l'approche des formations &
            la valorisation des compétences des étudiants.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Créer une plateforme simple et intuitive qui répond aux besoins des universités, en
            prenant en compte la diversité des formations & la complexité des processus.
            </p>
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
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/acteur-bancaire'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
    
  );
}
