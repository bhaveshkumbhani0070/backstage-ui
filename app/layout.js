import Header from '@/components/layout/Header';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col overflow-hidden antialiased">
        <Header />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
