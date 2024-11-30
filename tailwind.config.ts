// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers dans src
    "./src/app/globals.css" // Inclut spécifiquement globals.css
  ],
  theme: {
    extend: {
      spacing: {
        '24px': '24px',
        '40px': '40px',
        '80px': '80px',
        '120px': '120px',
      },
      screens: {
        xs: '448px', // Breakpoint pour >448px
        sm: '640px', // Breakpoint pour >640px
        md: '1024px', // Breakpoint pour >1024px
        lg: '1360px', // Breakpoint pour >1360px
      },
      maxWidth: {
        body: '1200px', // Largeur fixe pour le body au-delà de 1360px
      },
    },
    container: {
      center: true, // Centrer le conteneur automatiquement
      padding: {
        DEFAULT: '0px', // Padding par défaut
        xs: '0px',
        sm: '0px', // Padding pour >600px
        md: '0px', // Padding pour >1024px
        lg: '0px', // Padding pour >1360px
      },
    },
  },
  plugins: [],
};
