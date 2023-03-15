import { Html, Head, Main, NextScript } from 'next/document';
import RootStyleRegistry from '../components/emotion';
export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>{`원랜디 조합도우미`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="간편한 원랜디 조합도우미입니다 현재 깍 이감등 수치를 계산해 보여줍니다."
        />
        <meta
          name="keywords"
          content="원피스랜덤디펜스, 원피스 랜덤 디펜스, 원랜디, 시온스, 조합도우미"
        />
        <meta
          name="google-site-verification"
          content="PELG3PmOlE1bAzoVEivGh9Z-2iJNMxa9tyzKmrD6nUc"
        />
        <link rel="canonical" href="https://kaizoku.kr/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <RootStyleRegistry>
          <Main />
          <NextScript />
        </RootStyleRegistry>
      </body>
    </Html>
  );
}
