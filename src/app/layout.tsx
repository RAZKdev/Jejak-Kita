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
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-brand/20 relative">
        <ThemeProvider>
          {/* Ambient Travel Background Layer */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            {/* Top Aurora Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[550px] rounded-full blur-3xl opacity-25 dark:opacity-35 bg-gradient-to-b from-brand/35 via-emerald-600/15 to-transparent dark:from-brand/25 dark:via-emerald-500/15 dark:to-transparent" />
            
            {/* Warm Sunrise Corner Glow */}
            <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 dark:opacity-20 bg-amber-500/15 dark:bg-amber-600/10" />
            
            {/* Subtle Horizon Glow */}
            <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 dark:opacity-20 bg-emerald-700/10 dark:bg-emerald-500/10" />

            {/* Cartographic Travel Grid Pattern */}
            <div className="absolute inset-0 bg-travel-pattern text-foreground opacity-[0.035] dark:opacity-[0.06] [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_90%)]" />
          </div>

          <AppNavbar />
          <main className="flex-1 pb-20 md:pb-10 relative">
            {children}
          </main>
          <MobileTabBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
