//src/pages/formations.js

import React from 'react';
import TopBar from '../components/topBar';
import BottomBar from '../components/bottomBar';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

const projectProps = "h-[80px] w-[80px]"
const projectCardProps = 'flex flex-col items-start gap-[var(--spacing-sm)]'
const cardProps = "flex flex-row items-center gap-[var(--spacing-l)] bg-[var(--color-card)] border border-[var(--color-divider)] rounded-[var(--radius-ml)] px-[var(--spacing-ml)] pb-[var(--spacing-ml)] pt-[var(--spacing-sm)] sm:px-[var(--spacing-l)] sm:py-[var(--spacing-l)] sm:pt-[var(--spacing-l)] h-full"

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
        <title> Formations - Mathilde Signol </title>
      </Head>

      {/* TOP BAR */}
      <TopBar />

      {/* MAIN CONTENT */}
      <div className="custom-container pt-[var(--spacing-2xl)] space-y-[var(--spacing-xl)] pb-[var(--spacing-xl)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1">Mes <em className="serif">formations</em></h1></section>

        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-[var(--spacing-2xl)]'>

          {/* CERTIFICATIONS */}
          <FadeIn>
            <section id= "certifications" className='flex flex-col space-y-[var(--spacing-l)] pb-[var(--spacing-2xl)]'>
                <h2 className="text2 uppercase">Certifications</h2>

                {/* OPQUAST */}
                <div id='opquast' className={cardProps}>
                  <img src="/images/logoFormation-opquast.png" alt="Opquast" className={projectProps}/>
                  <div className={projectCardProps}>
                    <h3 className='h5'>Certification Qualité Web</h3>
                    <span className='text2'>Opquast ・ 11.2023</span>
                  </div>
                </div>

                {/* PSPO1 */}
                <div id='PSPO1'className={cardProps}>
                  <img src="/images/logoFormation-scrum.png" alt="Scrum.org" className={projectProps}/>
                  <div className={projectCardProps}>
                    <h3 className='h5'>Certification PSPO 1</h3>
                    <span className='text2'>Scrum.org ・ 07.2021</span>

                  </div>
                </div>

            </section>
          </FadeIn>

          {/* FORMATIONS */}
          <FadeIn>
            <section id= "formations" className='flex flex-col space-y-[var(--spacing-l)] pb-[var(--spacing-2xl)]'>
                <h2 className="text2 uppercase">Formations</h2>

                    {/* LE LAPTOP */}
                    <div id='lelaptop' className={cardProps}>
                      <img src="/images/logoFormation-lelaptop.png" alt="Le Laptop" className={projectProps}/>
                      <div className={projectCardProps}>
                        <h3 className='h5'>UX Design</h3>
                        <span className='text2'>Le Laptop ・ 09.2022</span>
                      </div>
                    </div>

                    {/* HEC ISAE */}
                    <div id='hecisae' className={cardProps}>
                      <img src="/images/logoFormation-hecisae.png" alt="HEC ISAE" className={projectProps}/>
                      <div className={projectCardProps}>
                        <h3 className='h5'>Master spécialisé en Management de Grands Projets</h3>
                        <span className='text2'>HEC / ISAE-Supaéro ・ 2018</span>
                      </div>
                    </div>

                    {/* ENSAM */}
                    <div id='ensam' className={cardProps}>
                      <img src="/images/logoFormation-ensam.png" alt="Arts & Métiers" className={projectProps}/>
                      <div className={projectCardProps}>
                        <h3 className='h5'>Diplôme d'ingénieur</h3>
                        <span className='text2'>Arts & Métiers ・ 2017</span>
                      </div>
                    </div>

            </section>
          </FadeIn>

        </div>
        
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
