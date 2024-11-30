// src/pages/tokens.tsx
import React from 'react';
import '../../app/globals.css';

const TokensPreview = () => {
  // Liste des tokens que vous souhaitez afficher
  const colors = [
    '--color-primary',
    '--color-black',
    '--color-white',
    '--color-text1',
    '--color-text2',
    '--color-text3',
    '--color-divider',
    '--color-symbol-black',
    '--color-symbol-primary',
    '--color-card',
    '--color-blur-black',
    '--color-blur-primary',
    '--color-shadow',
  ];

  const typographyClasses = [
    'text1',
    'text2',
    'text3',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
  ];

  return (
    <div className="p-8">
      <h1 className="h1">Preview des Tokens</h1>

      {/* Section des Couleurs */}
      <section>
        <h2 className="h2">Couleurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {colors.map((color) => {
            const contrastColor = `${color}-contrast`; // Couleur de contraste

            return (
              <div
                key={color}
                style={{
                  backgroundColor: `var(${color})`,
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <p className="text1" style={{ color: `var(${contrastColor})` }}>
                  Couleur {color}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section des Typographies */}
      <section>
        <h2 className="h2">Typographies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {typographyClasses.map((typographyClass) => (
            <div
              key={typographyClass}
              style={{
                backgroundColor: `var(--color-card)`,
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <p className={typographyClass}>
                Exemple de texte ({typographyClass})
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TokensPreview;
