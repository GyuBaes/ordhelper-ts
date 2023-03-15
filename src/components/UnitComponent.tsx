/** @jsxImportSource @emotion/react */
'use client';
import { Unit } from '@/types/Unit';
import { useDispatch, useSelector } from 'react-redux';
import { addUnitQty, setUnitQty, setCombination } from '@/reducer/unitList';
import type { RootState } from '@/store';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { getPercent, getLessUnit } from '@/calculator';
import Percent from './Percent';
import Material from './Material';
import CombiDescription from './CombiDescription';
import LessLowestUnit from './LessLowestUnit';
import UnitDescription from './UnitDescription';
import { cloneDeep } from 'lodash';
import { css } from '@emotion/react';
type IsActive = {
  [key: string]: boolean;
};

interface Props {
  unit: Unit;
  isChecked: IsActive;
}

interface NameProps {
  attack: string | undefined;
}

interface ProgressProps {
  percent: number;
  name: string;
}

const dlcList = [
  '코알라히든',
  '레베카히든',
  '레베카제한됨',
  '비비영원함',
  '우타영원함',
  '오뎅영원함',
  '레드필드제한됨',
  '죠타로랜덤제한됨',
  '시키랜덤제한됨',
  '타츠마키랜덤제한됨',
  '부릉냐랜덤제한됨',
  '미나토랜덤제한됨',
  '키쿄우랜덤제한됨',
  '바쿠야랜덤제한됨',
  '히그마랜덤제한됨',
  '유카리랜덤제한됨',
];

const UnitComponent = ({ unit, isChecked }: Props) => {
  const unitList = useSelector((state: RootState) => state.unit);
  const dispatch = useDispatch();
  const [benList, setBenList] = useState<string[]>([]);
  const [isHover, setIsHover] = useState(false);
  let isDlc = false;
  let isBen = false;
  dlcList.forEach(el => {
    if (el === unit.name) isDlc = true;
  });

  const handleCombiantion = (e: React.MouseEvent) => {
    e.preventDefault();
    if (percent >= 100) dispatch(setCombination(unit));
  };

  const qtyHandler = () => {
    dispatch(addUnitQty(unit.index));
  };

  const setBen = (e: React.MouseEvent) => {
    e.preventDefault();
    benList.push(unit.name);
    setBenList([...benList]);
  };

  benList.forEach(el => {
    if (el === unit.name) isBen = true;
  });

  const setQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnitQty({ value: +e.target.value, index: unit.index }));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const lessUnit = getLessUnit(unitList, unit);
  let percent: number;
  if (isChecked['흔함제외퍼센트']) {
    const temp = cloneDeep(unitList).map(el => {
      return el.grade === 'common' ? { ...el, ...{ qty: 0 } } : el;
    });
    percent = getPercent(temp, unit);
  } else percent = getPercent(unitList, unit);

  if ((isChecked['확장팩제외'] && isDlc) || isBen) return <></>;
  else
    return (
      <Container>
        <UnitWrapper
          onClick={qtyHandler}
          onContextMenu={handleCombiantion}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <Image
            alt={`${unit.dpname}`}
            src={`https://next-js-ord-helper.s3.ap-northeast-2.amazonaws.com/images/${unit.urn}.webp`}
            width={21}
            height={21}
            onContextMenu={setBen}
            css={css`
              @media (min-width: 1921px) {
                width: 30px;
                height: 30px;
              }
            `}
          />
          <Progress percent={percent} name={unit.name}>
            <Percent percent={percent} name={unit.name} />
            <Name attack={unit.attack}>{`\u00A0${unit.dpname}\u00A0`}</Name>
            <UnitDescription unit={unit} isChecked={isChecked} />
          </Progress>
          <LessLowestUnit lessUnit={lessUnit} isHover={isHover} />
          <Material
            material={unit.material}
            isHover={isHover}
            grade={unit.grade}
          />
          <CombiDescription
            combiDescription={unit.combiDescription}
            isHover={isHover}
          />
        </UnitWrapper>
        <QtyInput
          value={unit.qty}
          type="text"
          onClick={() => {
            inputRef.current?.select();
          }}
          onChange={setQty}
          ref={inputRef}
          aria-label="InputQty"
        />
      </Container>
    );
};

export default UnitComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 21px;
  background-color: rgb(250 250 250);
  margin-bottom: 0.5px;
  @media (min-width: 1921px) {
    height: 30px;
  }
`;

const QtyInput = styled.input`
  height: 21px;
  width: 20px;
  text-align: center;
  font-size: 15px;
  background-color: rgb(244 244 245);
  @media (min-width: 1921px) {
    height: 30px;
  }
`;

const Name = styled.span<NameProps>`
  font-size: 13px;
  color: ${props =>
    props.attack === 'ad'
      ? `rgb(220 38 38)`
      : props.attack === 'ap'
      ? `rgb(37 99 235)`
      : ``};
`;

const UnitWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Progress = styled.div<ProgressProps>`
  display: flex;
  align-items: center;
  width: ${props => (props.percent >= 100 ? 100 + '%' : props.percent + '%')};
  height: 21px;
  background-color: ${props =>
    props.name !== '위습'
      ? props.percent >= 100
        ? 'rgb(254 240 138)'
        : 'rgb(186 230 253)'
      : ''};

  @media (min-width: 1921px) {
    height: 30px;
  }
`;
