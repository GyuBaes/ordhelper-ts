/** @jsxImportSource @emotion/react */
'use client';
import { Global } from '@emotion/react';
import { cssReset } from '@/styles/global';
import styled from '@emotion/styled';
import UnitListContainer from '@/components/UnitListContainer';
import { IBM_Plex_Sans_KR } from '@next/font/google';
import { Providers } from '@/components/Provider';

const plex = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['400'],
});
const Page = () => {
  return (
    <>
      <Providers>
        <Global styles={cssReset} />
        <Container className={plex.className}>
          <UnitListContainer />
        </Container>
      </Providers>
    </>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 0 0 5px;
`;
