/** @jsxImportSource @emotion/react */
'use client';
import styled from '@emotion/styled';
import { Unit } from '@/types/Unit';
import UnitComponent from './UnitComponent';

interface Props {
  unitList: Unit[];
}

const UnitList = ({ unitList }: Props) => {
  return (
    <Container>
      <Grade>{unitList[0].grade}</Grade>
      {unitList.map(el => {
        return <UnitComponent key={el.name} unit={el} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Grade = styled.span``;

export default UnitList;
