//src/pages/experiences.js

import React from 'react';
import TopBar from '../components/topBar';
import { useRouter } from 'next/router';
import ProjectCard from '../components/project-card';
import BottomBar from '../components/bottomBar';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Experiences() {
  const router = useRouter();

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

  return (
    <div className="flex flex-col bg-[var(--color-background)]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <title> Expériences - Mathilde Signol </title>
      </Head>
      
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] pb-[var(--spacing-xl)] space-y-[var(--spacing-l)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes <em className="serif">expériences</em></h1></section>

        {/* LIST */}
        <section className="w-full max-w-[1200px] space-y-[var(--spacing-3xl)] pb-[var(--spacing-4xl)] pt-[var(--spacing-xl)]">

          {/* Projet Kompaz */}
          <FadeIn><ProjectCard
            title='Kompaz'
            id = "kompaz"
            href = "/experiences/kompaz"
            image = "/images/project-kompaz.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
          </ProjectCard></FadeIn>

          {/* Projet MESR */}
          <FadeIn><ProjectCard
            title='Cofolio'
            id = "mesr"
            href = "/experiences/cofolio"
            image = "/images/project-cofolio.png"
            typeText = 'Saas ・ B2C'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}]}>
          </ProjectCard></FadeIn>

          {/* Projet Acteur Bancaire */}
          <FadeIn><ProjectCard
            title='Marketplace'
            id = "marketplace"
            href = "/experiences/marketplace"
            image = "/images/project-marketplace.png"
            typeText = 'Saas ・ B2E'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard></FadeIn>

          {/* Projet CPF */}
          <FadeIn><ProjectCard
            title='Mon Compte Formation'
            id = "cpf"
            href = "/experiences/moncompteformation"
            image = "/images/project-cpf.png"
            typeText = 'Site web ・ App ・ B2C'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}, {text: "Design System"}, {text: "Product Management"},]}>
          </ProjectCard></FadeIn>

          {/* Projet Welcome Studio */}
          <FadeIn><ProjectCard
            title='Welcome Studio'
            id = "welcome-studio"
            href = "/experiences/welcomestudio"
            image = "/images/project-welcomestudio.png"
            typeText = 'Prototype Figma'
            badges = {[{text: "UX Design"}, {text: "UI Design"}, {text: "Graphisme"}]}>
          </ProjectCard></FadeIn>

          {/* Projet CERTIF */}
          <FadeIn><ProjectCard
            title='Certificateurs'
            id = "certificateurs"
            href = "/experiences/certificateurs"
            image = "/images/project-certificateurs.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}, {text: "UI Design"}]}>
          </ProjectCard></FadeIn>

          {/* Projet Soltea */}
          {/* <ProjectCard
            title='Soltéa'
            id = "soltea"
            image = "/images/project-soltea.png"
            typeText = 'SaaS ・ B2B'
            badges = {[{text: "Branding"}, {text: "UX Design"}]}>
          </ProjectCard> */}

          {/* Projet Imagine */}
          <FadeIn><ProjectCard
            title='Imagine'
            id = "imagine"
            href = "/experiences/imagine"
            image = "/images/project-imagine.png"
            typeText = 'Agence de Design'
            badges = {[{text: "Lead"}, {text: "Branding"}, {text: "Graphisme"}]}>
          </ProjectCard></FadeIn>

        </section>
        
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
