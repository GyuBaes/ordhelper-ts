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
  isChecked: IsActive;
}
type GradeType = {
  [index: string]: string;
};
type IsActive = {
  [key: string]: boolean;
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

const UnitList = ({ unitList, isChecked }: Props) => {
  const [seeUnitlist, setSeeUnitlist] = useState(true);
  const dispatch = useDispatch();

  const handleResetQty = () => {
    dispatch(resetQty(unitList[0].grade));
  };

  const gradeProperty = unitList[0].grade;

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setSeeUnitlist(!seeUnitlist)}>
          <Subtitle>{grade[gradeProperty]}</Subtitle>
        </Button>
        <Button onClick={handleResetQty}>
          <Subtitle>{`초기화`}</Subtitle>
        </Button>
      </ButtonContainer>
      {seeUnitlist &&
        unitList.map(el => {
          return (
            <UnitComponent key={el.name} unit={el} isChecked={isChecked} />
          );
        })}
    </Container>
  );
};

export default UnitList;

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const Subtitle = styled.span`
  font-size: 0.7rem;
  display: block;
  height: 21.5px;
  margin: 0 0.1rem 0 0.1rem;
  padding-top: 0.1rem;

  @media (min-width: 1921px) {
    height: 30px;
    font-size: 1rem;
  }
`;

const Button = styled.button``;
