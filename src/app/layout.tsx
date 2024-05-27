import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shazam App',
  description: 'Automatic your job with Shazam'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
