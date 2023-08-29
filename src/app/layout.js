import { getCurrentScheme } from '@/utils/colorScheme';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}) {
  const scheme = await getCurrentScheme();

  return (
    <html lang="en" className={scheme === 'dark' ? 'dark' : ''}>
      <body>{children}</body>
    </html>
  )
}