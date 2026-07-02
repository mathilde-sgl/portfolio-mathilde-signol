//src/pages/index.tsx

import TopBar from '../components/topBar';
import ButtonsList from '@/components/buttons-list';
import { useRouter } from 'next/router';
import ProjectCard from '@/components/project-card';
import BottomBar from '@/components/bottomBar';
import Head from 'next/head';
import { Span } from 'next/dist/trace';
import { useState } from "react";
import FadeIn from "@/components/fade-in";

const logoProps = "h-auto w-[var(--dimension-5xl)] object-contain";
const cardProps = "flex flex-col" //bg-[var(--color-card)] rounded-[var(--radius-ml)] px-[var(--spacing-ml)] pb-[var(--spacing-ml)] sm:pt-[var(--spacing-xs)] sm:px-[var(--spacing-l)] sm:pb-[var(--spacing-l)]"

export default function Homepage() {
  const router = useRouter();

  const email = "mathilde.signol.pro@gmail.com";
  const [copie, setCopie] = useState(false);

  const copierEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopie(true);
      setTimeout(() => setCopie(false), 3000);
    } catch (e) {
      // le navigateur a bloqué le presse-papiers : on ne fait rien
    }
  };

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head> <title> Accueil - Mathilde Signol </title> <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/> </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] space-y-[var(--spacing-3xl)]">

        {/* SECTION 1 : Intro */}
        <section id="intro" className="flex flex-col md:flex-row items-center gap-[var(--spacing-2xl)]">

          {/* Left Column - Intro Text */}
          <FadeIn>
            <div className='flex flex-col gap-[var(--spacing-2xl)] items-start'>

              {/* Disponibilité */}
              <div className='inline-flex items-center gap-[var(--spacing-sm)] border border-[var(--color-dark-info-divider)] py-[6px] px-[var(--spacing-sm)] rounded-[var(--radius-xs)]'>
                <div style={{width: "var(--dimension-sm)", height: "var(--dimension-sm)", borderRadius: "50%", backgroundColor: "var(--color-dark-info)",}}/>
                <p className='text1'> Disponible Septembre 2026 </p>
              </div>

              {/* Main Title */}
              <h1 className="h1 !pt-[var(--spacing-none)] !pb-[var(--spacing-none)]">Lead Product <em className="serif">Designer</em></h1>
              <p className="h5 !pt-[var(--spacing-none)] !text-[var(--color-text2)]">8 ans d'expérience</p>

              {/* Accroche */}
              <div className="space-y-[var(--spacing-sm)]">
                <p className="text1">
                  Vous souhaitez <span className="text1Bold">refondre</span> ou <span className="text1Bold">créer</span> un produit de bout en bout ? <br />
                  Vous cherchez à mettre en place ou gérer un <span className="text1Bold">Design System</span> ? <br />
                  Vous voulez <span className="text1Bold">construire</span> ou <span className="text1Bold">coacher</span> votre équipe de Designers ?
                </p>
              </div>

              {/* Actions Buttons */}  
              <ButtonsList
                size="large"
                primaryAction={{text: "Me contacter", onClick: () => {document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth"});},leadingIcon: "mail",}} 
                secondaryAction={{text: "Découvrir", onClick: () => {document.querySelector("#my-proposal")?.scrollIntoView({ behavior: "smooth"});}, leadingIcon: "arrow-down",}}              
              />        

            </div>
          </FadeIn>

          {/* Right Column - Photo */}
          <div className="relative ">
            <div className="relative overflow-hidden rounded-[var(--radius-ml)]" style={{boxShadow: "8px 12px 40px rgba(26,22,20,0.12)"}}>
              <img src="/images/photo-ms.png" alt="Mathilde Signol - Lead Product Designer" className="w-full h-full object-cover"/>  
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-[var(--color-card-blur)] backdrop-blur-md rounded-[var(--radius-sm)] px-[var(--spacing-ml)] py-[var(--spacing-sm)] border border-[var--color-divider)]">
              <p className="text2 !text-[var(--color-title)]"> Hybride ou télétravail </p>
              <p className="text2 !text-[var(--color-text1)]"> Bordeaux ・ Paris ・ Toulouse</p>
            </div>

          </div>
          
        </section>

        {/* SECTION 2 : CE QUE JE VOUS PROPOSE */}
        <section id="my-proposal" className="gap-y-[var(--spacing-sm)] gap-x-[var(--spacing-sm)]">

          <h2 className='h2'>Ce que je vous <em className="serif">propose</em></h2>

            <div className='flex flex-col md:grid md:grid-cols-3 gap-y-[var(--spacing-xl)] gap-x-[var(--spacing-3xl)] pb-[var(--spacing-xl)]'>
            
              {/* Card 1 */}
              <FadeIn delay={0} className="h-full">
              <div className={cardProps}>
                <span className='text3'>01</span>
                <span className='h4 !text-[var(--color-primary)]'>
                  Une approche centrée utilisateurs & data
                </span>
                <span className='text1'>
                  Placer vos <span className="text1Bold">utilisateurs</span> au coeur de vos décisions, en prenant compte de vos
                  <span className="text1Bold"> enjeux stratégiques</span> & vos <span className="text1Bold">contraintes métiers</span>.
                </span>
              </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={80} className="h-full">
              <div className={cardProps}>
                <span className='text3'>02</span>
                <span className='h4 !text-[var(--color-primary)]'>
                  Une direction artistique forte & personnalisée
                </span>
                <span className='text1'>
                  Définir une <strong>image de marque</strong> garante de la personnalité de votre produit, qui posera
                  une première brique à votre <strong>Design System</strong>.
                </span>
              </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={160} className="h-full">
              <div className={cardProps}>
              <span className='text3'>03</span>
                <span className='h4 !text-[var(--color-primary)]'>
                  Un Design System solide & scalable
                </span>
                <span className='text1'>
                  Créer un Design System avec vos <strong>développeurs</strong> adapté à la complexité de votre écosystème, 
                  outil de diffusion de la <strong>pensée design</strong> & <strong>vision utilisateur</strong>.
                </span>
              </div>
              </FadeIn>

              {/* Card 4 */}
              <FadeIn delay={240} className="h-full">
              <div className={cardProps}>
                <span className='text3'>04</span>
                <span className='h4 !text-[var(--color-primary)]'>
                  Une UX & UI de qualité
                </span>
                <span className='text1'>
                  Proposer une <strong>expérience simple & inclusive </strong> 
                  à travers une <strong>interface élégante & intuitive</strong> pour votre produit (B2B, B2C, B2E, SaaS, site web, app...).
                </span>
              </div>
              </FadeIn>

              {/* Card 5 */}
              <FadeIn delay={320} className="h-full">
              <div className={cardProps}>
                <span className='text3'>05</span>
                <span className='h4 !text-[var(--color-primary)]'>
                  Un coaching sur mesure
                </span>
                <span className='text1'>
                  M'intégrer à vos <strong>équipes</strong> afin de bien comprendre votre <strong>organisation </strong> (agilité, comitologie...) 
                  et vous aider à l'<strong>améliorer</strong>.
                </span>
              </div>
              </FadeIn>

           </div>

            <div id="main-actions" className='flex justify-center'>
              <ButtonsList
              size="large"
              secondaryAction={{text: "Découvrir mes expertises", onClick: () => router.push('/expertises'), leadingIcon: "arrow-next",}}             
              />
            </div>
          
        </section>
        
        {/* SECTION 3 : ILS M'ONT FAIT CONFIANCE */}
        <section id="my-clients" className="w-full max-w-[1200px] space-y-[var(--spacing-sm)] space-x-[var(--spacing-sm)]">
          <h2 className='h2'>Ils m'ont confié leurs <em className='serif'>produits</em></h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 items-center gap-[var(--spacing-2xl)]'>
              <FadeIn delay={0}><img src="/images/logo-acteur-energie.png" alt="Acteur de l'énergie" className={logoProps}/></FadeIn>
              <FadeIn delay={60}><img src="/images/logo-acteur-bancaire.png" alt="Acteur Bancaire" className={logoProps}/></FadeIn>
              <FadeIn delay={120}><img src="/images/logo-mesr.png" alt="Ministère de l'éducation supérieure et de la recherche" className={logoProps}/></FadeIn>
              <FadeIn delay={180}><img src="/images/logo-cdc.png" alt="Caisse des dépôts et Consignations" className={logoProps}/></FadeIn>
              <FadeIn delay={240}><img src="/images/logo-cpf.png" alt="Mon Compte Formation" className={logoProps}/></FadeIn>
              <FadeIn delay={300}><img src="/images/logo-mc2i.png" alt="mc2i" className={logoProps}/></FadeIn>
              <FadeIn delay={360}><img src="/images/logo-imagine.png" alt="Imagine" className={logoProps}/></FadeIn>
              <FadeIn delay={420}><img src="/images/logo-airfrance.png" alt="Airfrance" className={logoProps}/></FadeIn>
              <FadeIn delay={480}><img src="/images/logo-klm.png" alt="KLM" className={logoProps}/></FadeIn>
              <FadeIn delay={540}><img src="/images/logo-airbus.png" alt="Airbus" className={logoProps}/></FadeIn>
            </div>
          <div className='flex justify-center'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Me contacter", onClick: () => {document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth"});}, leadingIcon: "mail",}}             
            />        
         </div>
        </section>

        {/* SECTION 4 : MES DERNIERS PROJETS */}
        <section id="last-projects" className="w-full max-w-[1200px] space-y-[var(--spacing-xl)]">
          <h2 className='h2'>Mes derniers <em className='serif'>projets</em></h2>

          {/* Projet Kompaz */}
          <FadeIn>
            <ProjectCard
            title='Kompaz'
            id = "kompaz"
            href = "/experiences/kompaz"
            image = "/images/project-kompaz.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
            </ProjectCard>
          </FadeIn>

          {/* Projet Cofolio */}
          <FadeIn>
            <ProjectCard
            title='Cofolio'
            id = "cofolio"
            href = "/experiences/cofolio"
            image = "/images/project-cofolio.png"
            typeText = 'Saas ・ B2C'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
            </ProjectCard>
          </FadeIn>

          {/* Projet Acteur Bancaire */}
          <FadeIn>
            <ProjectCard
            title='Marketplace'
            id = "marketplace"
            href = "/experiences/marketplace"
            image = "/images/project-marketplace.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
            </ProjectCard>
          </FadeIn>

          <div className='flex justify-center'>    
            <ButtonsList
              size="large"
              secondaryAction={{text: "Voir plus de projets", onClick: () => router.push('/experiences'), leadingIcon: "arrow-next",}}             
            />        
         </div>

        </section>

        {/* SECTION 5 : CONTACTEZ-MOI */}
        <section id="contactez-moi" className="w-full max-w-[1200px] bg-[var(--color-card)] rounded-[var(--radius-sm)] px-[var(--spacing-2xl)] py-[var(--spacing-l)] border border-[var--color-divider)]">
          <FadeIn>
              <div className='w-full flex-wrap pb-[var(--spacing-xl)]'>
                <h2 className='h2'> Un projet en tête ? <em className="italic"> Parlons-en.</em>
                </h2>
                <p className='text2'>Connectons-nous sur LinkedIn ou contactez-moi à mathilde.signol.pro@gmail.com.</p>
              </div>        

              <ButtonsList
                size="large"
                primaryAction={{text: copie ? "Adresse e-mail copiée !" : "Copier l'adresse e-mail", onClick: copierEmail, leadingIcon: copie ? "copied" : "copy", ariaLabel: copie ? "Adresse e-mail copiée" : "Copier l'adresse e-mail",}} 
                secondaryAction={{text: "Se connecter sur LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/mathilde-signol", "_blank", "noopener,noreferrer"), leadingIcon: "linkedin", ariaLabel: "se connecter sur LinkedIn"}}            
              />       

          </FadeIn>
        </section>

      </div>

      {/*BOTTOM BAR*/}  
      <section id="footer"><BottomBar></BottomBar></section>
    
    </div>
  );
}
