import React from 'react';
import '../app/globals.css';
import TopBar from '../components/topBar';
import { useRouter } from 'next/router';
import ProjectCard from '../components/project-card';
import BottomBar from '../components/bottomBar';


export default function Experiences() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] space-y-[var(--spacing-3xl)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes expériences</h1></section>

        {/* LIST */}
        <section className="w-full max-w-[1200px] space-y-[var(--spacing-3xl)] pb-[var(--spacing-4xl)]">

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

          {/* Projet CERTIF */}
          <ProjectCard
            title='Certificateurs'
            id = "certificateurs"
            href = "/experiences/certificateurs"
            image = "/images/project-certificateurs.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}>
          </ProjectCard>

          {/* Projet Soltea */}
          {/* <ProjectCard
            title='Soltéa'
            id = "soltea"
            image = "/images/project-soltea.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}]}>
          </ProjectCard> */}

          {/* Projet Imagine */}
          <ProjectCard
            title='Imagine'
            id = "imagine"
            href = "/experiences/imagine"
            image = "/images/project-imagine.png"
            typeText = 'Agence de Design'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "Graphisme"}]}>
          </ProjectCard>

          {/* Projet mc2i */}
          {/* <ProjectCard
            title='mc2i'
            id = "mc2i"
            image = "/images/project-mc2i.png"
            typeText = 'Cabinet de conseil'
            badges = {[{text: "Branding"}, {text: "Communication"}, {text: "Graphisme"}]}>
          </ProjectCard> */}

        </section>
        
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
