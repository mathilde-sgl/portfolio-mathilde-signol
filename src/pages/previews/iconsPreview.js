import React, { useEffect, useState } from 'react';
import Icon from '../components/icon';

const IconsPreview = () => {
    const [iconSizes, setIconSizes] = useState({});
    const [iconColors, setIconColors] = useState({});

    // Chargement de tous les fichiers SVG et extractions de leurs noms
    const iconsContext = require.context('../app/icons', false, /\.svg$/);
    const iconNames = iconsContext.keys().map((path) => path.replace('./', '').replace('.svg', ''));

    useEffect(() => {
        // Fonction pour obtenir la valeur d'une variable CSS
        function getCssVariableValue(varName) {
            return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        }

        // Définir les tailles des icônes après le chargement du client
        setIconSizes({
            m: getCssVariableValue("--dimension-m"),
            ml: getCssVariableValue("--dimension-ml"),
            l: getCssVariableValue("--dimension-l"),
            xl: getCssVariableValue("--dimension-xl"),
            xxl: getCssVariableValue("--dimension-2xl"),
        });

        // Définir les couleurs des icônes après le chargement du client
        setIconColors({
            black: getCssVariableValue("--color-black"),
            primary: getCssVariableValue("--color-primary"),
            symbolBlack: getCssVariableValue("--color-symbol-black"),
            symbolPrimary: getCssVariableValue("--color-symbol-primary"),
        });
    }, []); // Utilisation d'un tableau vide pour exécuter useEffect une seule fois après le chargement

    const sizes = Object.values(iconSizes);
    const colors = Object.values(iconColors);

    return (
        <div style={{ padding: "var(--spacing-xl)" }}>
            <h1 className='h1'>Icons Preview</h1>

            {/* Section de démonstration pour toutes les icônes */}
            <h2 className='h2'> List of Icons </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: "var(--spacing-ml)",
                textAlign: 'center',
            }}>
                {iconNames.map(iconName => (
                    <div key={iconName} style={{ 
                        display: 'inline-block',
                        minWidth: 'var(--spacing-xl)', 
                        padding: "var(--spacing-sm)", 
                        borderRadius: "var(--radius-xs)", 
                        backgroundColor: "var(--color-card)",
                        textAlign: 'center'
                    }}>
                        <Icon name={iconName} />
                        <span className='text2' style={{ display: 'block', marginTop: '8px' }}>{iconName}</span>
                    </div>
                ))}
            </div>

            {/* Section spécifique pour l'icône "home" avec plusieurs tailles et couleurs */}
            <h2 className='h2'>Colors variations</h2>

            <div style={{display:'flex', gap:"var(--spacing-ml)"}}>
                {colors.map(color => (
                    <div key={color} style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        borderRadius: "var(--radius-xs)", 
                        backgroundColor: "var(--color-card)",
                        padding: "var(--spacing-sm)",
                     }}>
                        <Icon name="home" color={color} />
                        <span className='text2' style={{ marginTop: "var(--spacing-sm)"}}> {color} </span>
                     </div>
                ))}
            </div>

            <h2 className='h2'>Sizes variations</h2>

            <div style={{display:'flex', gap:"var(--spacing-ml)"}}>
                {sizes.map(size => (
                    <div key={size} style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        width: "var(--dimension-4xl)",
                        height: "var(--dimension-4xl)",
                        borderRadius: "var(--radius-xs)", 
                        backgroundColor: "var(--color-card)",
                        padding: "var(--spacing-sm)",
                     }}>
                        <Icon name="arrow-next" size={size} />
                        <span className='text2' style={{ marginTop: "var(--spacing-sm)"}}> {size} </span>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default IconsPreview;
