import type { Metadata } from 'next';
import './globals.css';
import { AppNavbar } from '@/components/navigation/navbar';
import { MobileTabBar } from '@/components/navigation/mobile-tab-bar';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Jejak Kita — Perjalanan Rangga & Ibu',
  description: 'Private travel planner & memory journal untuk Rangga dan Ibu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jejak-kita-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-brand/20">
        <ThemeProvider>
          <AppNavbar />
          <main className="flex-1 pb-20 md:pb-10">
            {children}
          </main>
          <MobileTabBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
