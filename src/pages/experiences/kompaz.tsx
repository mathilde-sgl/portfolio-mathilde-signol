import React from 'react';
import TopBar from '@/components/topBar';
import { useRouter } from 'next/router';
import Badges from '@/components/badge';
import ButtonsList from '@/components/buttons-list';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]"

export default function ExperienceKompaz() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Kompaz - Mathilde Signol </title>
      </Head>
      
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)]">
        
        {/* TITLE */}
        <section id="title" className='pb-[var(--spacing-xl)]'>
            <h1 className="h1">Kompaz</h1>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className={sectionProps}>
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
              <p className='text2'>Saas ・ B2E</p>
              <div style={{width: "var(--dimension-3xs)", height: "var(--dimension-sm)", borderRadius: "var(--radius-2xs)", backgroundColor: "var(--color-divider)",}}/>
              <p className='text2'>2025-2026</p>
            </div>
            <Badges badges={[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}></Badges>
            <p className='text1 max-w-[560px] pb-[var(--spacing-sm)]'>
            Refonte UX/UI et industrialisation de l’outil de management des emplois et compétences 
            des centrales nucléaires françaises (23 000 utilisateurs potentiels) <br />
            </p>
            <img src="/images/kompaz-intro.png" alt="maquettes montrant l'interface graphique"></img>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className={sectionProps}>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Contexte</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Cet acteur de l'énergie souhaite répondre à un besoin opérationnel des managers sur le terrain : 
            les aider à gagner en performance sur le management des compétences de leurs équipes.
            </p>
            <h2 className='h3 !text-[var(--color-symbol-primary)]'>Enjeux</h2>
            <p className='text1 max-w-[720px] pb-[var(--spacing-sm)]'>
            Offrir un outil intégré de management des compétences et des emplois pour les managers et les acteurs qui les appuient 
            couvrant les besoins de plusieurs départements avec chacun leur propre organisation et des différents niveaux de l'entreprise.
            </p>
        </section>

        {/* PLANNING DU PROJET */}
        <section id="planning" className={sectionProps}>
            <h2 className='h2'>Planning</h2>
            <img src="/images/kompaz-timeline.png" alt="timeline de Kompaz"></img>
        </section>

        {/* RECHERCHE UTILISATEUR */}
        <section id="user-research" className={sectionProps}>
            <h2 className='h2'>Recherche utilisateurs</h2>
            <img src="/images/kompaz-personas.png" alt="deux des 5 personas du produit Kompaz : le manager d'équipe et le chef de service"></img>
            <img src="/images/kompaz-experiencemap.png" alt="experience map du manager d'équipe, avec ses activités, besoins et irritants"></img>
        </section>

        {/* IDENTITÉ DU PRODUIT */}
        <section id="identité-produit" className={sectionProps}>
            <h2 className='h2'>Identité du produit</h2>
            <img src="/images/kompaz-identite-produit.png" alt="identité du produit Kompaz"></img>
        </section>

        {/* DESIGN SYSTEM */}
        <section id="design-system" className={sectionProps}>
            <h2 className='h2'>Design System</h2>
            <img src="/images/kompaz-design-system.png" alt="design System de Kompaz"></img>
        </section>

        {/* ARBORESCENCE */}
        <section id="userflow" className={sectionProps}>
            <h2 className='h2'>Arborescence</h2>
            <img src="/images/kompaz-arborescence.png" alt="arborescence de l'outil Kompaz"></img>
        </section>

        {/* USER FLOW */}
        <section id="userflow" className={sectionProps}>
            <h2 className='h2'>Parcours utilisateurs</h2>
            <img src="/images/kompaz-userflow1.png" alt="parcours utilisateurs macro de l'outil Kompaz"></img>
            <img src="/images/kompaz-userflow2.png" alt="parcours utilisateurs du cas d'usage : l'utilisateur souhaite suivre et piloter les formations de son équipe"></img>
            <img src="/images/kompaz-userflow3.png" alt="parcours utilisateurs du cas d'usage : l'utilisateur souhaite paramétrer l'outil à l'initialisation"></img>
        </section>

        {/* MAQUETTES */}
        <section id="maquettes" className={sectionProps}>
            <h2 className='h2'>Maquettes</h2>
            <img src="/images/kompaz-maquettes1.png" alt="2 maquettes montrant des tableaux de bords"></img>
            <img src="/images/kompaz-maquettes2.png" alt="2 maquettes montrant des listes de données et leurs filtres"></img>
            <img src="/images/kompaz-maquettes3.png" alt="2 maquettes montrant de la visualisation de données et de diagrammes"></img>
        </section>

         {/* USERTEST */}
         <section id="usertest" className={sectionProps}>
            <h2 className='h2'>Tests utilisateurs</h2>
            <img src="/images/kompaz-usertest.png" alt="2 planches de restitution de tests utilisateurs"></img>
        </section>

        <div id="main-actions" className='flex flex-col-reverse gap-[var(--spacing-ml)] sm:flex-row justify-between pt-[var(--spacing-xl)] pb-[var(--spacing-4xl)]'>
            <ButtonsList
              size="large"
              tertiaryAction={{text: "Projet précédent", onClick: () => router.push('/experiences/imagine'), leadingIcon: "arrow-back",}}             
            /> 
            <ButtonsList
              size="large"
              secondaryAction={{text: "Projet suivant", onClick: () => router.push('/experiences/cofolio'), leadingIcon: "arrow-next",}}             
            />        
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
    
  );
}
