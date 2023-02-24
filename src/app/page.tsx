/** @jsxImportSource @emotion/react */
'use client';
import { Global } from '@emotion/react';
import { cssReset } from '@/styles/global';
import styled from '@emotion/styled';
import UnitListContainer from '@/components/UnitListContainer';

const Page = () => {
  return (
    <>
      <Global styles={cssReset} />
      <Container>
        <UnitListContainer />
      </Container>
    </>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
