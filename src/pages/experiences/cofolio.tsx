import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import FadeIn from '@/components/fade-in';
import KeyNumbers from '@/components/key-numbers';
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
        <FadeIn>
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Cofolio</h1>
        </section>
        </FadeIn>

        {/* INTRODUCTION */}
        <FadeIn>
        <section id="introduction" className={sectionProps}>
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Saas ・ B2C</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <p className='text2'>2024</p>
            </div>
            <Badges badges={[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}></Badges>
            <p className='text1 max-w-[560px] pb-[var(--spacing-sm)]'>
                Création d'un dispositif ePortfolio pour valoriser une approche par compétences des étudiants français. <br />
            </p>
            <img src="/images/cofolio-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>
        </FadeIn>

        {/* PRÉSENTATION */}
        <FadeIn>
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
        </FadeIn>

        {/* CHIFFRES CLÉS */}
        <KeyNumbers numbers={[
          { number: "600K à 3M", label: "utilisateurs potentiels" },
          { number: "03", label: "univers utilisateurs" },
        ]} />

        {/* CHARTE GRAPHIQUE */}
        <FadeIn>
        <section id="charte-graphique" className={sectionProps}>
            <h2 className='h2'>Charte Graphique</h2>
            <img src="/images/cofolio-graphic-design.png" alt="charte graphique de Cofolio"></img>
        </section>
        </FadeIn>

        {/* DESIGN SYSTEM */}
        <FadeIn>
        <section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/cofolio-design-system.png" alt="design System de Cofolio"></img>
        </section>
        </FadeIn>

        {/* USER FLOW */}
        <FadeIn>
        <section id="userflow" className={sectionProps}>
            <h2 className='h2'>Parcours utilisateurs</h2>
            <img src="/images/cofolio-userflow.png" alt="parcours utilisateur d'un étudiant qui souhaite suivre et valoriser ses compétences"></img>
        </section>
        </FadeIn>

        {/* MAQUETTES */}
        <FadeIn>
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/cofolio-maquettes1.png" alt="3 maquettes montrant l'inferface Cofolio"></img>
        </section>
        </FadeIn>

        <FadeIn>
        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/kompaz'), leadingIcon: "arrow-back",}}
            />
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/marketplace'), leadingIcon: "arrow-next",}}
            />
        </div>
        </FadeIn>
      </div>
      <BottomBar></BottomBar>
    </div>

  );
}
