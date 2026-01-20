// pages/componentsPreview.js
import React from 'react';
import '../../app/globals.css';
import TextButton from '../../components/text-button';
import Tab from '../../components/tab';
import TopBar from '../../components/topBar';
import ButtonsList from '../../components/buttons-list';

const Playground = () => {

    const tabs = [
      { label: "Tab 1", content: <p>Contenu du premier onglet</p>, leadingIcon: 'home' },
      { label: "Tab 2", content: <p>Contenu du deuxième onglet</p>, leadingIcon: 'home' },
      { label: "Tab 3", content: <p>Contenu du troisième onglet</p>, leadingIcon: 'home' },
    ];

  return (
    <div style={{ padding: 'var(--spacing-xl)', color: "var(--color-background)" }}>
      <h1 className="h1">Components Preview</h1>

        <h2 className="h2">Buttons</h2>

          <h3 className='h3'>Flat Buttons</h3>
          <div 
            style={{ 
              display: 'flex', 
              gap: 'var(--spacing-sm)', 
              flexWrap: 'wrap', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
              alignItems: 'center',
              justifyItems: 'center',
              paddingBottom: "var(--spacing-ml)",
            }}
          >
          <TextButton text="Flat Button" type="flat" size="large" leadingIcon='home' trailingIcon='arrow-next'/>
          <TextButton text="Flat Button" type="flat" size="medium" leadingIcon='home' trailingIcon='arrow-next'/>
          <TextButton text="Flat Button" type="flat" size="small" leadingIcon='home' trailingIcon='arrow-next' />
          </div>
        

          <h3 className='h3'>Outline Buttons</h3>
          <div 
            style={{ 
              display: 'flex', 
              gap: 'var(--spacing-sm)', 
              flexWrap: 'wrap', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
              alignItems: 'center',
              justifyItems: 'center',
              paddingBottom: "var(--spacing-ml)",
            }}
          >

          <TextButton text="Outline Button" type="outline" size="large" leadingIcon='home' trailingIcon='arrow-next' />
          <TextButton text="Outline Button" type="outline" size="medium" leadingIcon='home' trailingIcon='arrow-next'/>
          <TextButton text="Outline Button" type="outline" size="small" leadingIcon='home' trailingIcon='arrow-next'/>
          </div>
          

          <h3 className='h3'>Basic Buttons</h3>
          <div 
            style={{ 
              display: 'flex', 
              gap: 'var(--spacing-sm)', 
              flexWrap: 'wrap', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
              alignItems: 'center',
              justifyItems: 'center',
              paddingBottom: "var(--spacing-ml)",
            }}
          >
            <TextButton text="Basic Button" type="basic" size="large" leadingIcon='home' trailingIcon='arrow-next'/>
            <TextButton text="Basic Button" type="basic" size="medium" leadingIcon='home' trailingIcon='arrow-next'/>
            <TextButton text="Basic Button" type="basic" size="small" leadingIcon='home' trailingIcon='arrow-next'/>
        
          </div>

          <h3 className='h3'>Buttons without icons</h3>
            <div 
              style={{ 
                display: 'flex', 
                gap: 'var(--spacing-sm)', 
                flexWrap: 'wrap', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
                alignItems: 'center',
                justifyItems: 'center',
                paddingBottom: "var(--spacing-ml)",
              }}
            >
              <TextButton text="Flat Button" type="flat" size="large"/>
              <TextButton text="Outline Button" type="outline" size="large" />
              <TextButton text="Basic Button" type="basic" size="large" />
          
          </div>
        
          <h3 className='h3'>Buttons with leading Icon</h3>
            <div 
              style={{ 
                display: 'flex', 
                gap: 'var(--spacing-sm)', 
                flexWrap: 'wrap', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
                alignItems: 'center',
                justifyItems: 'center',
                paddingBottom: "var(--spacing-ml)",
              }}
            >
            <TextButton text="Flat Button" type="flat" size="large" leadingIcon='home'/>
            <TextButton text="Outline Button" type="outline" size="large" leadingIcon='home'/>
            <TextButton text="Basic Button" type="basic" size="large" leadingIcon='home'/>
        
          </div>

          <h3 className='h3'>Buttons with trailing Icon</h3>
            <div 
              style={{ 
                display: 'flex', 
                gap: 'var(--spacing-sm)', 
                flexWrap: 'wrap', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', // Empêche les boutons de s'étirer verticalement
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
            <TextButton text="Flat Button" type="flat" size="large" trailingIcon='arrow-next'/>
            <TextButton text="Outline Button" type="outline" size="large" trailingIcon='arrow-next'/>
            <TextButton text="Basic Button" type="basic" size="large" trailingIcon='arrow-next'/>
        
          </div>

        <h2 className="h2">Tabs</h2>
        <Tab tabs={tabs} />
          
        <h2 className="h2">TopBar</h2>
        <TopBar></TopBar>

        <h2 className='h2'>List of Buttons</h2>
        <h3 className='h3'>Large List</h3>
          <ButtonsList
            size="large"
            primaryAction={{
              text: "Valider",
              onClick: () => alert("Action principale déclenchée !"),
              leadingIcon: "arrow-next",
            }}
            secondaryAction={{
              text: "Retour à l'accueil",
              onClick: () => alert("Action secondaire déclenchée !"),
              leadingIcon: "home",
            }}
            tertiaryAction={{
              text: "Annuler",
              onClick: () => alert("Action tertiaire déclenchée !"),
              leadingIcon: "close",
            }}
          />

        <h3 className='h3'>Medium List</h3>
          <ButtonsList
            size="medium"
            primaryAction={{
              text: "Valider",
              onClick: () => alert("Action principale déclenchée !"),
              leadingIcon: "arrow-next",
            }}
            secondaryAction={{
              text: "Retour à l'accueil",
              onClick: () => alert("Action secondaire déclenchée !"),
              leadingIcon: "home",
            }}
            tertiaryAction={{
              text: "Annuler",
              onClick: () => alert("Action tertiaire déclenchée !"),
              leadingIcon: "close",
            }}
          />

        <h3 className='h3'>Small List</h3>
          <ButtonsList
            size="small"
            primaryAction={{
              text: "Valider",
              onClick: () => alert("Action principale déclenchée !"),
              leadingIcon: "arrow-next",
            }}
            secondaryAction={{
              text: "Retour à l'accueil",
              onClick: () => alert("Action secondaire déclenchée !"),
              leadingIcon: "home",
            }}
            tertiaryAction={{
              text: "Annuler",
              onClick: () => alert("Action tertiaire déclenchée !"),
              leadingIcon: "close",
            }}
          />
        </div>
      
  );
};

export default Playground;
