//src/app/layout.js

export const metadata = {
  title: 'Mon site',
  description: 'Description de mon site web',
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
