import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceCertificateurs() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Certificateurs - Mathilde Signol </title>
      </Head>

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
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Saas ・ B2B</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <span className='text2 !font-semibold'>2022</span>
            </div>
            <Badges badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}></Badges>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Création d'une plateforme SaaS pour transmettre les certifications, 
            certifiant la véracité des données qui alimentent le passeport de compétences.
            </p>
            <img src="/images/certificateurs-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Le ministère du travail lance un nouveau service public d'envergure : le Passeport de Compétences.
            Afin de garantir ses données, une plateforme SaaS à destination des
            certificateurs est mise en place afin qu'ils puissent déposer les certifications & diplômes qu'ils ont délivré.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)] flex flex-col gap-[var(--spacing-xs)]'>
              Concevoir une expérience utilisateur simple & une interface épurée, prenant en compte
              des processus métiers complexes.
            </p>
        </section>

        {/* PARCOURS */}
        <section id="parcours" className={sectionProps}>
            <h2 className='h2'>Parcours utilisateurs</h2>
            <img src="/images/certificateurs-parcours.png" alt="parcours utilisateurs depuis la page d'accueil"></img>
        </section>

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/certificateurs-maquettes1.png" alt="maquettes de la page d'accueil, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/certificateurs-maquettes2.png" alt="maquettes du dossier de formation, en version mobile & desktop" className='pb-[var(--spacing-xl)]'></img>
            <img src="/images/certificateurs-maquettes3.png" alt="maquettes de la recherche de formation, en version mobile & desktop"></img>
        </section>

        {/* PROTOTYP */}
        <section id="prototype" className={sectionProps}>
            <h2 className='h2'>Prototype</h2>
            <img src="/images/certificateurs-prototype.png" alt="prototype de la création d'un compte"></img>
        </section>

        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/moncompteformation'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/imagine'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
