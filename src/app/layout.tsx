import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
