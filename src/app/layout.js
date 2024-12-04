//src/app/layout.js

export const metadata = {
  title: 'Mathilde Signol - UX UI Designer Senior',
  description: 'Portfolio de mes réalisations - UX Design - UI Design - Design System - Figma',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/ms-logo.svg" />
        <link rel="icon" type="image/png" href="/images/ms-logo.png" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
