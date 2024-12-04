import React from 'react';
import '../app/globals.css';
import TopBar from '../components/topBar';
import BottomBar from '../components/bottomBar';
import { useRouter } from 'next/router';
import Head from 'next/head';

const projectProps = "h-[80px] w-[80px]"
const projectCardProps = 'flex flex-col items-start gap-[var(--spacing-sm)]'

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
      <div className="custom-container pt-[var(--spacing-xl)] space-y-[var(--spacing-3xl)]">
        
        {/* TITLE */}
        <section id="title"><h1 className="h1 w-full">Mes formations</h1></section>

        {/* LIST */}
        <section className="w-full max-w-[1200px] space-y-[var(--spacing-2xl)] pb-[var(--spacing-4xl)]">

          {/* OPQUAST */}
          <div id='opquast' className='flex flex-row gap-[var(--spacing-2xl)] items-center'>
            <img src="/images/logoFormation-opquast.png" alt="Opquast" className={projectProps}/>
            <div className={projectCardProps}>
              <h3 className='h5'>Certification Qualité Web</h3>
              <span className='text2'>Opquast   |   11.2023</span>
            </div>
          </div>

          {/* LE LAPTOP */}
          <div id='lelaptop' className='flex flex-row gap-[var(--spacing-2xl)] justify-items-center items-center'>
            <img src="/images/logoFormation-lelaptop.png" alt="Le Laptop" className={projectProps}/>
            <div className={projectCardProps}>
              <h3 className='h5'>UX Design</h3>
              <span className='text2'>Le Laptop | 09.2022</span>
            </div>
          </div>

          {/* PSPO1 */}
          <div id='PSPO1'className='flex flex-row gap-[var(--spacing-2xl)] items-center'>
            <img src="/images/logoFormation-scrum.png" alt="Scrum.org" className={projectProps}/>
            <div className={projectCardProps}>
              <h3 className='h5'>Certification PSPO1</h3>
              <span className='text2'>Scrum.org | 07.2021</span>
            </div>
          </div>

          {/* HEC ISAE */}
          <div id='hecisae'className='flex flex-row gap-[var(--spacing-2xl)] items-center'>
            <img src="/images/logoFormation-hecisae.png" alt="HEC ISAE" className={projectProps}/>
            <div className={projectCardProps}>
              <h3 className='h5'>Master spécialisé en Management de Grands Projets</h3>
              <span className='text2'>HEC / ISAE-Supaéro | 2018</span>
            </div>
          </div>

          {/* ENSAM */}
          <div id='ensam'className='flex flex-row gap-[var(--spacing-2xl)] items-center'>
            <img src="/images/logoFormation-ensam.png" alt="Arts & Métiers" className={projectProps}/>
            <div className={projectCardProps}>
              <h3 className='h5'>Diplôme d'ingénieur</h3>
              <span className='text2'>Arts & Métiers | 2017</span>
            </div>
          </div>

        </section>
        
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
