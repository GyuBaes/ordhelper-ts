/** @jsxImportSource @emotion/react */
'use client';
import { Global } from '@emotion/react';
import { cssReset } from '@/styles/global';
import styled from '@emotion/styled';

const Page = () => {
  return (
    <>
      <Global styles={cssReset} />
      <Container>intial setting</Container>
    </>
  );
};

export default Page;

const Container = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
