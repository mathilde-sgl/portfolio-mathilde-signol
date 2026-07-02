//src/pages/expertises.js

import React from 'react';
//import '../app/globals.css';
import TopBar from '../components/topBar';
import Badges from '../components/badge';
import IllustrationTexts from '../components/illustration-text';
import { useRouter } from 'next/router';
import BottomBar from '../components/bottomBar';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

const cardProps = "flex flex-col gap-[var(--spacing-l)] bg-[var(--color-card)] border border-[var(--color-divider)] rounded-[var(--radius-ml)] px-[var(--spacing-ml)] pb-[var(--spacing-ml)] pt-[var(--spacing-sm)] sm:px-[var(--spacing-l)] sm:py-[var(--spacing-l)] sm:pt-[var(--spacing-l)] h-full"

const productBadgesData = [
    { text: "Product Management", size: "medium",}, 
    { text: "Analytique & Data", size: "medium",},
    { text: "Vision produit", size: "medium",},
    { text: "Dev", size: "medium",},
    { text: "Web", size: "medium",},
    { text: "App", size: "medium",},
    { text: "SaaS", size: "medium",},
    { text: "B2C", size: "medium",},
    { text: "B2E", size: "medium",},
    { text: "B2B", size: "medium",},
  ];
  
  const designBadgesData = [
    { text: "UX Design", size: "medium",},
    { text: "UI Design", size: "medium",},
    { text: "Design Thinking", size: "medium",},
    { text: "Design System", size: "medium",},
    { text: "Direction Artistique", size: "medium",},
    { text: "Branding", size: "medium",},
    { text: "Graphisme", size: "medium",},
    { text: "Accessibilité numérique", size: "medium",},
    { text: "Facilitation graphique", size: "medium",},
    { text: "IA", size: "medium",},
  ];

  const managementBadgesData = [
    { text: "Lead", size: "medium",},
    { text: "Communication", size: "medium",},
    { text: "Travail en équipe", size: "medium",},
    { text: "Coaching", size: "medium",},
    { text: "Construction d'équipe", size: "medium",},
    { text: "Gestion de crise", size: "medium",},
  ];

  const projectBadgesData = [
    { text: "Frameworks agiles", size: "medium",},
    { text: "Scrum", size: "medium",},
    { text: "Kanban", size: "medium",},
    { text: "SAFe", size: "medium",},
  ];

  const sectorBadgesData = [
    { text: "Aviation", size: "medium",},
    { text: "Aéronautique", size: "medium",},
    { text: "Banque", size: "medium",},
    { text: "Secteur public", size: "medium",},
    { text: "Formation professionnelle", size: "medium",},
    { text: "Formation", size: "medium",},
    { text: "E-commerce", size: "medium",},
  ];

  const langageBadgesData = [
    { text: "Français (courant)", size: "medium",},
    { text: "Anglais (fluide)", size: "medium",},
  ];

  const productToolsData = [
    { leadingIllustration: {type: "image", src: "/images/logoToolFigma.png"}, text: "Suite Figma", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolSketch.png"}, text: "Sketch", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolAdobeXd.png"}, text: "Adobe XD", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolAdobeIllustrator.png"}, text: "Adobe Illustrator", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolAdobePhotoshop.png"}, text: "Adobe Photoshop", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolAdobeIndesign.png"}, text: "Adobe Indesign", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolInvision.png"}, text: "Invision", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolZeplin.png"}, text: "Zeplin", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolProcreate.png"}, text: "Procreate", size: "medium"},
  ];

  const cocreationToolsData = [
    { leadingIllustration: {type: "image", src: "/images/logoToolMetroRetro.png"}, text: "Metro Retro", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolKlaxoon.png"}, text: "Klaxoon", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolWhimsical.png"}, text: "Whimsical", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolMiro.png"}, text: "Miro", size: "medium"},
  ];

  const projectToolsData = [
    { leadingIllustration: {type: "image", src: "/images/logoToolJira.png"}, text: "Jira & Confluence", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolMicrosoftOffice.png"}, text: "Suite Microsoft", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolGoogleSuite.png"}, text: "Suite Google", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolGitlab.png"}, text: "Gitlab", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolTrello.png"}, text: "Trello", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolAirtable.png"}, text: "Airtable", size: "medium"},
  ];

  const devToolsData = [
    { leadingIllustration: {type: "image", src: "/images/logoToolWebflow.png"}, text: "Webflow", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolStorybook.png"}, text: "Storybook", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolABTasty.png"}, text: "AB Tasty", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolGoogleAnalytics.png"}, text: "Google Analytics", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoToolVisualStudioCode.png"}, text: "Visual Studio Code*", size: "medium"},
    { leadingIllustration: {type: "image", src: "/images/logoClaudeIA.png"}, text: "Claude IA", size: "medium"},
  ];


function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}) {
  
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Experiences() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Expertises - Mathilde Signol </title>
      </Head>
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] pb-[var(--spacing-xl)] space-y-[var(--spacing-l)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes <em className="serif">expertises</em></h1></section>

        {/* SECTION 1 : MES COMPÉTENCES */}
        <section id= "competences" className='pb-[var(--spacing-2xl)]'>
            <FadeIn>
            <div className='flex gap-[var(--spacing-l)]'>
                <h2 className="h2 !text-[--color-primary]">Mes compétences</h2>
            </div>
            </FadeIn>

            <FadeIn>
            <div className='grid grid-cols-1 md:grid-cols-2 items-stretch gap-[var(--spacing-2xl)]'>

                {/* DESIGN */}
                <div id='design'>
                    <div className={cardProps}>
                    <h3 className='text2 uppercase'>Design</h3>
                    <Badges badges={designBadgesData} />
                    </div>
                </div>

                {/* PRODUIT */}
                <div id='product'>
                    <div className={cardProps}>
                    <h3 className='text2 uppercase'>Produit</h3>
                    <Badges badges={productBadgesData} />
                    </div>
                </div>

                {/* MANAGEMENT */}
                <div id='management'>
                    <div className={cardProps}>
                    <h3 className='text2 uppercase'>Management</h3>
                    <Badges badges={managementBadgesData} />
                    </div>
                </div>

                {/* GESTION DE PROJET */}
                <div id='projectmanagement'>
                    <div className={cardProps}>
                    <h3 className='text2 uppercase'>Projet</h3>
                    <Badges badges={projectBadgesData} />
                    </div>
                </div>

            </div>
            </FadeIn>

        </section>

        {/* SECTION 2 : MES OUTILS */}
        <section id= "outils" className='pb-[var(--spacing-2xl)]'>
            <FadeIn>
              <div className='flex flex-row items-center gap-[var(--spacing-l)] '>
                  {/*<Icon name="tools" size="var(--dimension-2xl)"></Icon>*/}
                  <h2 className="h2 !text-[--color-primary]">Mes outils</h2>
              </div>
            </FadeIn>

              <div className='grid grid-cols-1 md:grid-cols-4 items-stretch gap-[var(--spacing-2xl)]'>

                  {/* PRODUCT & DESIGN */}
                  <FadeIn delay={0} className="h-full">
                  <div id='product&design' className='h-full'>
                      <div className={cardProps}>
                      <h3 className='text2 uppercase'>Design & Produit</h3>
                      <IllustrationTexts illustrationTexts={productToolsData} />
                      </div>
                  </div>
                  </FadeIn>

                  {/* CO-CRÉATION */}
                  <FadeIn delay={100} className="h-full">
                  <div id='cocreation' className='h-full'>
                      <div className={cardProps}>
                      <h3 className='text2 uppercase'>Co-création</h3>
                      <IllustrationTexts illustrationTexts={cocreationToolsData} />
                      </div>
                  </div>
                  </FadeIn>

                  {/* PROJECT MANAGEMENT */}
                  <FadeIn delay={200} className="h-full">
                  <div id='projectmanagement' className='h-full'>
                      <div className={cardProps}>
                      <h3 className='text2 uppercase'>Gestion de projet</h3>
                      <IllustrationTexts illustrationTexts={projectToolsData} />
                      </div>
                  </div>
                  </FadeIn>
                  
                  {/* DEV & DATA */}
                  <FadeIn delay={300} className="h-full">
                  <div id='dev&data' className='h-full'>
                      <div className={cardProps}>
                      <h3 className='text2 uppercase'>Dev & Data</h3>
                      <IllustrationTexts illustrationTexts={devToolsData} />
                      <span className='text2 pt-[var(--spacing-ml)]'>*HTML, CSS, React, Tailwind</span>
                      </div>
                  </div>
                  </FadeIn>

              </div>

        </section>

      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
