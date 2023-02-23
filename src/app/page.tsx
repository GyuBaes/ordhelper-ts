/** @jsxImportSource @emotion/react */
'use client';
import { Global } from '@emotion/react';
import { cssReset } from '@/styles/global';
import styled from '@emotion/styled';
import { getPercent, getLessUnit, setCombinationUnit } from '@/calculator';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import UnitList from '@/components/UnitList';
import { Unit } from '@/types/Unit';

const Page = () => {
  const tempArray = useSelector((state: RootState) => state.unit);
  const dispatch = useDispatch();
  const unitList: Array<Unit[]> = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  // const unitList: Array<Unit[]> = new Array(12).fill([]);
  let gradeTemp = 'common';
  let idx = 0;

  tempArray.map(el => {
    if (gradeTemp !== el.grade) {
      gradeTemp = el.grade;
      idx++;
    }
    unitList[idx].push(el);
  });

  return (
    <>
      <Global styles={cssReset} />
      <Container>
        {unitList.map(el => {
          return <UnitList key={el[0].grade} unitList={el} />;
        })}
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
