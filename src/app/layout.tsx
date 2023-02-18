import { Providers } from '@/components/Provider';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Providers>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </Providers>
      </body>
    </html>
  );
}
