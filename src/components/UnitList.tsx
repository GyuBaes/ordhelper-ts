/** @jsxImportSource @emotion/react */
'use client';
import styled from '@emotion/styled';
import { Unit } from '@/types/Unit';
import UnitComponent from './UnitComponent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetQty } from '@/reducer/unitList';

interface Props {
  unitList: Unit[];
}
type GradeType = {
  [index: string]: string;
};

const grade: GradeType = {
  common: '흔함',
  uncommon: '안흔함',
  unique: '특별함',
  rare: '희귀함',
  legendary: '전설',
  hidden: '히든',
  changed: '변화됨',
  transcendence: '초월함',
  immortal: '불멸의',
  eternity: '영원함',
  limited: '제한됨',
  randomltd: '랜덤제한됨',
};

const UnitList = ({ unitList }: Props) => {
  const [seeUnitlist, setSeeUnitlist] = useState(true);
  const dispatch = useDispatch();

  const handleResetQty = () => {
    dispatch(resetQty(unitList[0].grade));
  };

  const gradeProperty = unitList[0].grade;

  return (
    <Container>
      <ButtonContainer>
        <button onClick={() => setSeeUnitlist(!seeUnitlist)}>
          <Subtitle>{grade[gradeProperty]}</Subtitle>
        </button>
        <button onClick={handleResetQty}>
          <Subtitle>{`초기화`}</Subtitle>
        </button>
      </ButtonContainer>
      {seeUnitlist &&
        unitList.map(el => {
          return <UnitComponent key={el.name} unit={el} />;
        })}
    </Container>
  );
};

export default UnitList;

const Container = styled.div`
  padding-bottom: 9.1px;
`;
const Subtitle = styled.span`
  font-size: 13px;
  display: block;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
