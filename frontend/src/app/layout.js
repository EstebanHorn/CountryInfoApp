import "./globals.css";


export const metadata = {
  title: "Countries Info App",
  description: "Full-Stack JS engineer test assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
