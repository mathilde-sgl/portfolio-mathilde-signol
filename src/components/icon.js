// src/components/Icon.js
import React from 'react';

// Charger dynamiquement tous les fichiers SVG dans le dossier 'icons'
const iconsContext = require.context('../app/icons', false, /\.svg$/);

// Créer un objet `icons` avec chaque nom d'icône mappé à son composant SVG
const icons = iconsContext.keys().reduce((acc, path) => {
    const iconName = path.replace('./', '').replace('.svg', '');
    acc[iconName] = iconsContext(path).default || iconsContext(path);
    return acc;
}, {});

const Icon = ({ name, size = "24px", color = "currentColor", ...props }) => {
    const SvgIcon = require(`../app/icons/${name}.svg`).default;

    return (
        <SvgIcon 
            style={{ 
                color: color, 
                width: size, 
                height: size,
                display: 'inline-flex'
            }} 
            aria-label={name}
            {...props}
        />
    );

};

export default Icon;