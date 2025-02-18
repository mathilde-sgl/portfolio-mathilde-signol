import React from 'react';
import '../app/globals.css';
import TopBar from '../components/topBar';
import Badges from '../components/badge';
import IllustrationTexts from '../components/illustration-text';
import { useRouter } from 'next/router';
import BottomBar from '../components/bottomBar';
import Head from 'next/head';

const cardProps = "flex flex-col" //bg-[var(--color-card)] rounded-[var(--radius-ml)] px-[var(--spacing-ml)] pb-[var(--spacing-ml)] sm:pt-[var(--spacing-xs)] sm:px-[var(--spacing-l)] sm:pb-[var(--spacing-l)] h-full"

const digitalBadgesData = [
    { text: "Product Management", size: "medium",}, 
    { text: "Analytique & Data", size: "medium",},
    { text: "Dev", size: "medium",},
    { text: "Web", size: "medium",},
    { text: "App", size: "medium",},
    { text: "SaaS", size: "medium",},
    { text: "B2C", size: "medium",},
    { text: "B2E", size: "medium",},
    { text: "B2B", size: "medium",},
  ];
  
  const productBadgesData = [
    { text: "UX Design", size: "medium",},
    { text: "UI Design", size: "medium",},
    { text: "Design Thinking", size: "medium",},
    { text: "Design System", size: "medium",},
    { text: "Direction Artistique", size: "medium",},
    { text: "Branding", size: "medium",},
    { text: "Graphisme", size: "medium",},
    { text: "Accessibilité numérique", size: "medium",},
    { text: "Facilitation graphique", size: "medium",},
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
    { leadingIllustration: "/images/logoToolFigma.png", text: "Figma", size: "medium"},
    { leadingIllustration: "/images/logoToolSketch.png", text: "Sketch", size: "medium"},
    { leadingIllustration: "/images/logoToolAdobeXd.png", text: "Adobe XD", size: "medium"},
    { leadingIllustration: "/images/logoToolAdobeIllustrator.png", text: "Adobe Illustrator", size: "medium"},
    { leadingIllustration: "/images/logoToolAdobePhotoshop.png", text: "Adobe Photoshop", size: "medium"},
    { leadingIllustration: "/images/logoToolAdobeIndesign.png", text: "Adobe Indesign", size: "medium"},
    { leadingIllustration: "/images/logoToolInvision.png", text: "Invision", size: "medium"},
    { leadingIllustration: "/images/logoToolZeplin.png", text: "Zeplin", size: "medium"},
    { leadingIllustration: "/images/logoToolProcreate.png", text: "Procreate", size: "medium"},
  ];

  const cocreationToolsData = [
    { leadingIllustration: "/images/logoToolFigma.png", text: "Figjam", size: "medium"},
    { leadingIllustration: "/images/logoToolMetroRetro.png", text: "Metro Retro", size: "medium"},
    { leadingIllustration: "/images/logoToolKlaxoon.png", text: "Klaxoon", size: "medium"},
    { leadingIllustration: "/images/logoToolWhimsical.png", text: "Whimsical", size: "medium"},
    { leadingIllustration: "/images/logoToolMiro.png", text: "Miro", size: "medium"},
  ];

  const projectToolsData = [
    { leadingIllustration: "/images/logoToolJira.png", text: "Jira & Confluence", size: "medium"},
    { leadingIllustration: "/images/logoToolMicrosoftOffice.png", text: "Suite Microsoft", size: "medium"},
    { leadingIllustration: "/images/logoToolGoogleSuite.png", text: "Suite Google", size: "medium"},
    { leadingIllustration: "/images/logoToolGitlab.png", text: "Gitlab", size: "medium"},
    { leadingIllustration: "/images/logoToolTrello.png", text: "Trello", size: "medium"},
    { leadingIllustration: "/images/logoToolAirtable.png", text: "Airtable", size: "medium"},
  ];

  const devToolsData = [
    { leadingIllustration: "/images/logoToolWebflow.png", text: "Webflow", size: "medium"},
    { leadingIllustration: "/images/logoToolStorybook.png", text: "Storybook", size: "medium"},
    { leadingIllustration: "/images/logoToolABTasty.png", text: "AB Tasty", size: "medium"},
    { leadingIllustration: "/images/logoToolGoogleAnalytics.png", text: "Google Analytics", size: "medium"},
    { leadingIllustration: "/images/logoToolVisualStudioCode.png", text: "Visual Studio Code*", size: "medium"},
  ];

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
      <div className="custom-container pt-[var(--spacing-xl)] space-y-[var(--spacing-l)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes expertises</h1></section>

        {/* SECTION 1 : MES COMPÉTENCES */}
        <section id= "competences">
            <div className='flex flex-row items-center gap-[var(--spacing-l)]'>
                {/* <Icon name="competencies" size="var(--dimension-2xl)"></Icon>*/}
                <h2 className="h2 !text-[--color-primary]">Mes compétences</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 items-start gap-[var(--spacing-2xl)]'>

                {/* PRODUCT & DESIGN */}
                <div id='product&design' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Design</h3>
                    <Badges badges={productBadgesData} />
                    </div>
                </div>

                {/* BUSINESS & MANAGEMENT */}
                <div id='business&management' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Management</h3>
                    <Badges badges={managementBadgesData} />
                    </div>
                </div>

                {/* DIGITAL */}
                <div id='digital' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Produit</h3>
                    <Badges badges={digitalBadgesData} />
                    </div>
                </div>

                {/* GESTION DE PROJET */}
                <div id='projectmanagement' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Projet</h3>
                    <Badges badges={projectBadgesData} />
                    </div>
                </div>

                {/* SECTEURS */}
                {/*<div id='business&management' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Secteurs</h3>
                    <Badges badges={sectorBadgesData} />
                    </div>
                </div>*/}

                {/* BUSINESS & MANAGEMENT */}
                {/*<div id='langage' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Langues</h3>
                    <Badges badges={langageBadgesData} />
                    </div>
                </div>*/}
            </div>

        </section>

        {/* SECTION 2 : MES OUTILS */}
        <section id= "outils" className='pb-[var(--spacing-4xl)]'>
            <div className='flex flex-row items-center gap-[var(--spacing-l)] '>
                {/*<Icon name="tools" size="var(--dimension-2xl)"></Icon>*/}
                <h2 className="h2 !text-[--color-primary]">Mes outils</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 items-start gap-[var(--spacing-2xl)]'>

                {/* PRODUCT & DESIGN */}
                <div id='product&design' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Design & Produit</h3>
                    <IllustrationTexts illustrationTexts={productToolsData} />
                    </div>
                </div>

                {/* CO-CRÉATION */}
                <div id='cocreation' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Co-création</h3>
                    <IllustrationTexts illustrationTexts={cocreationToolsData} />
                    </div>
                </div>

                {/* PROJECT MANAGEMENT */}
                <div id='digital' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Gestion de projet</h3>
                    <IllustrationTexts illustrationTexts={projectToolsData} />
                    </div>
                </div>
                
                {/* DEV & DATA */}
                <div id='projectmanagement' className={cardProps}>
                    <div className={cardProps}>
                    <h3 className='h4'>Dev & Data</h3>
                    <IllustrationTexts illustrationTexts={devToolsData} />
                    <span className='text2 pt-[var(--spacing-ml)]'>*HTML, CSS, React, Tailwind</span>
                    </div>
                </div>
            
            </div>

        </section>

      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
