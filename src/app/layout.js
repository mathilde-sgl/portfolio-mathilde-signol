//src/app/layout.js
export const metadata = {
  title: 'Mathilde Signol - UX UI Designer Senior',
  description: 'Portfolio de mes réalisations : UX Design - UI Design - Design System - Figma',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
          {children}
      </body>
    </html>
  );
}
