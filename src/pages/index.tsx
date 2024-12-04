import React from 'react';
import '../app/globals.css';
import TopBar from '../components/topBar';
import ButtonsList from '@/components/buttons-list';
import { useRouter } from 'next/router';
import ProjectCard from '@/components/project-card';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';

const logoProps = "h-auto w-[var(--dimension-5xl)] object-contain";
const cardProps = "flex flex-col" //bg-[var(--color-card)] rounded-[var(--radius-ml)] px-[var(--spacing-ml)] pb-[var(--spacing-ml)] sm:pt-[var(--spacing-xs)] sm:px-[var(--spacing-l)] sm:pb-[var(--spacing-l)]"

export default function Homepage() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <title> Accueil - Mathilde Signol </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] pb-[var(--spacing-4xl)] space-y-[var(--spacing-3xl)]">
        
        {/* SECTION 1 : Main Title */}
        <section id="title" className="space-y-[var(--spacing-sm)]">
          <h1 className="h1 !pb-[var(--spacing-none)]">UX UI Designer Senior</h1>
          <p className="h4 !pt-[var(--spacing-sm)] !text-[var(--color-text2)]">depuis 6 ans, à Bordeaux</p>
        </section>

        {/* SECTION 2 : Intro */}
        <section id="intro" className="flex flex-col md:flex-row items-center gap-[var(--spacing-2xl)]">

          {/* Left Part - Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/photo-ms.png" 
              alt="Mathilde Signol" 
              className="w-[400px] h-[400px] object-cover rounded-full"
            />
          </div>

          {/* Right Part - Intro Text */}
          <div className='flex flex-col gap-[var(--spacing-xl)] items-end'>
            <div className="space-y-[var(--spacing-sm)]">
              <p className="text1">
                Vous souhaitez faire une <span className="text1Bold">refonte UX & UI</span> de bout en bout de votre produit ? <br />
                Vous cherchez à créer, mettre en place ou gérer un <span className="text1Bold">Design System</span> ? <br />
                Vous voulez <span className="text1Bold">construire</span> ou encore <span className="text1Bold">coacher</span> votre équipe de Designers ?
              </p>

              <p className='h3 pt-[var(--spacing-l)]'>
                Je vous accompagne !
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ACTIONS */}
        <section id="main-actions" className='flex items-end justify-end'>    
          <ButtonsList
            size="large"
            secondaryAction={{text: "Découvrir", onClick: () => {document.querySelector("#my-proposal")?.scrollIntoView({ behavior: "smooth"});}, leadingIcon: "arrow-down",}}            
            tertiaryAction={{text: "Me contacter", onClick: () => {document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth"});},leadingIcon: "call",}}   
          />        
        </section>

        {/* SECTION 4 : MA PROPOSITION */}
        <section id="my-proposal" className="gap-y-[var(--spacing-sm)] gap-x-[var(--spacing-sm)]">
          <h2 className='h2'>Ce que je vous propose</h2>
          <div className='flex flex-col md:grid md:grid-cols-3 gap-y-[var(--spacing-l)] gap-x-[var(--spacing-2xl)] pb-[var(--spacing-xl)]'>
            {/* Card 1 */}
            <div className={cardProps}>
              <span className='h4 !text-[var(--color-primary)]'>
                Une approche centrée utilisateurs
              </span>
              <span className='text1'>
                Placer vos <span className="text1Bold">utilisateurs</span> au coeur de nos décisions, en prenant compte de vos
                <span className="text1Bold"> enjeux stratégiques</span> & vos <span className="text1Bold">contraintes métiers</span>.
              </span>
            </div>

            {/* Card 2 */}
            <div className={cardProps}>
              <span className='h4 !text-[var(--color-primary)]'>
                Une direction artistique forte
              </span>
              <span className='text1'>
                Définir une <strong>image de marque</strong> garante de la personnalité de votre produit, qui posera
                une première brique à votre <strong>Design System</strong>.
              </span>
            </div>

            {/* Card 3 */}
            <div className={cardProps}>
              <span className='h4 !text-[var(--color-primary)]'>
                Un Design System solide
              </span>
              <span className='text1'>
                Créer un Design System avec vos <strong>développeurs</strong> adapté à la complexité de votre écosystème, 
                outil de diffusion de la <strong>pensée design</strong> & <strong>vision utilisateur</strong>.
              </span>
            </div>

            {/* Card 4 */}
            <div className={cardProps}>
              <span className='h4 !text-[var(--color-primary)]'>
                Une UX & UI de qualité
              </span>
              <span className='text1'>
                Proposer une <strong>expérience simple & inclusive </strong> 
                à travers une <strong>interface élégante & intuitive</strong> pour votre produit (B2B, B2C, B2E, SaaS, site web, app...).
              </span>
            </div>

            {/* Card 5 */}
            <div className={cardProps}>
              <span className='h4 !text-[var(--color-primary)]'>
                Un coaching sur mesure
              </span>
              <span className='text1'>
                M'intégrer à vos <strong>équipes</strong> afin de bien comprendre votre <strong>organisation </strong> (agilité, comitologie...) 
                et vous aider à l'<strong>améliorer</strong>.
              </span>
            </div>
          </div>

          <div id="main-actions" className='flex items-end justify-end'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir mes expertises", onClick: () => router.push('/expertises'), leadingIcon: "arrow-next",}}             
            />        
         </div>
          
        </section>

        {/* SECTION 5 : ILS M'ONT FAIT CONFIANCE */}
        <section id="my-clients" className="w-full max-w-[1200px] space-y-[var(--spacing-sm)] space-x-[var(--spacing-sm)]">
          <h2 className='h2'>Ils m'ont confié leurs produits</h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 items-center gap-[var(--spacing-2xl)]'>
            <img src="/images/logo-acteur-bancaire.png" alt="Acteur Bancaire" className={logoProps}/>
            <img src="/images/logo-mesr.png" alt="Ministère de l'éducation supérieure et de la recherche" className={logoProps}/>
            <img src="/images/logo-cdc.png" alt="Caisse des dépôts et Consignations" className={logoProps}/>
            <img src="/images/logo-cpf.png" alt="Mon Compte Formation" className={logoProps}/>
            <img src="/images/logo-mc2i.png" alt="mc2i" className={logoProps}/>
            <img src="/images/logo-imagine.png" alt="Imagine" className={logoProps}/>
            <img src="/images/logo-airfrance.png" alt="Airfrance" className={logoProps}/>
            <img src="/images/logo-klm.png" alt="KLM" className={logoProps}/>
            <img src="/images/logo-airbus.png" alt="Airbus" className={logoProps}/>
          </div>
          <div className='flex items-end justify-end'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Me contacter", onClick: () => {document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth"});}, leadingIcon: "arrow-down",}}             
            />        
         </div>
        </section>

        {/* SECTION 6 : Last Projects */}
        <section id="last-projects" className="w-full max-w-[1200px] space-y-[var(--spacing-xl)]">
          <h2 className='h2'>Mes derniers projets</h2>

          {/* Projet MESR */}
          <ProjectCard
            title='Cofolio'
            id = "mesr"
            href = "/experiences/mesr"
            image = "/images/project-mesr.png"
            typeText = 'Saas ・ B2C'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
          </ProjectCard>

          {/* Projet Acteur Bancaire */}
          <ProjectCard
            title='Marketplace'
            id = "acteur-bancaire"
            href = "/experiences/acteur-bancaire"
            image = "/images/project-acteur-bancaire.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard>

          {/* Projet CPF */}
          <ProjectCard
            title='Mon Compte Formation'
            id = "cpf"
            href = "/experiences/moncompteformation"
            image = "/images/project-cpf.png"
            typeText = 'Site web ・ App ・ B2C'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard>

          <div className='flex items-end justify-end'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Voir plus de projets", onClick: () => router.push('/experiences'), leadingIcon: "arrow-next",}}             
            />        
         </div>

        </section>

      </div>
      {/*BOTTOM BAR*/}  
      <section id="footer"><BottomBar></BottomBar></section>
  </div>
  );
}
