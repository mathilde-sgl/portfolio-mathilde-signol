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

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Welcome Studio - Mathilde Signol </title>
      </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">

        {/* TITLE */}
        <FadeIn>
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Welcome Studio</h1>
        </section>
        </FadeIn>

        {/* INTRODUCTION */}
        <FadeIn>
        <section id="introduction" className={sectionProps}>
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Prototype Figma ・ B2E</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <span className='text2'>2023</span>
            </div>
            <Badges badges = {[{text: "Lead"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Graphisme"} ]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
                Réalisation d'une infographie intéractive pour accueillir les nouveaux contributeurs au Studio, agence créa de mc2i.<br />
            </p>
            <img src="/images/welcomestudio-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>
        </FadeIn>

        {/* PRÉSENTATION */}
        <FadeIn>
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Le Studio mc2i accueille régulièrement de nouveaux arrivants, qui ont besoin d'assimiler
            un grand nombre d'informations.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)] flex flex-col gap-[var(--spacing-xs)]'>
              <span> Faciliter l'accompagnement des consultants qui ont envie de rejoindre le Studio mc2i.</span>
            </p>
        </section>
        </FadeIn>

        {/* CHIFFRES CLÉS */}
        <KeyNumbers numbers={[
          { number: "03", label: "nouveaux arrivants par mois" },
          { number: "01", label: "prototype Figma réalisé" },
          { number: "20", label: "utilisateurs du prototype" },
        ]} />

        {/* PARCOURS UTILISATEURS */}
        <FadeIn>
        <section id="userflow" className={sectionProps}>
            <h2 className='h2'>Parcours utilisateurs</h2>
            <img src="/images/welcomestudio-userflow.png" alt="Parcours utilisateur (complexe) du Welcome Studio"></img>
        </section>
        </FadeIn>

        {/* PROTOTYPE */}
        <FadeIn>
        <section id="prorotype" className={sectionProps}>
            <h2 className='h2'>Prototype</h2>
            <div className='flex justify-center'>
              <video autoPlay controls loop preload="metadata" className="w-full max-w-[800px] h-auto rounded-[var(--radius-xl)] border-[var(--color-divider)]">
                <source src="/videos/welcomestudio-prototype.mp4" type="video/mp4" />
              </video>
            </div>
        </section>
        </FadeIn>

        <FadeIn>
        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/moncompteformation'), leadingIcon: "arrow-back",}}
            />
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/certificateurs'), leadingIcon: "arrow-next",}}
            />
        </div>
        </FadeIn>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
