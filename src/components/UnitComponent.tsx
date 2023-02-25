/** @jsxImportSource @emotion/react */
'use client';
import { Unit } from '@/types/Unit';
import { useDispatch, useSelector } from 'react-redux';
import { addUnitQty, setUnitQty, setCombination } from '@/reducer/unitList';
import type { RootState } from '@/store';
import styled from '@emotion/styled';
import { useRef, memo, useDeferredValue } from 'react';
import Image from 'next/image';
import { getPercent } from '@/calculator';
import Percent from './Percent';

interface Props {
  unit: Unit;
}

interface NameProps {
  attack: string | undefined;
}

const UnitComponent = ({ unit }: Props) => {
  const dispatch = useDispatch();
  const unitList = useSelector((state: RootState) => state.unit);

  const handleCombiantion = (e: React.MouseEvent) => {
    e.preventDefault();
    // if (percent === 100) dispatch(setCombination(unit));
  };

  const qtyHandler = () => {
    dispatch(addUnitQty(unit.index));
  };

  const setQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnitQty({ value: +e.target.value, index: unit.index }));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const percent = useDeferredValue(getPercent(unitList, unit));

  return (
    <Container>
      <UnitWrapper>
        <Image
          alt={`${unit.dpname}`}
          src={`/images/${unit.urn}.webp`}
          width={28}
          height={28}
        />
        <Percent percent={percent} />
        <Name
          attack={unit.attack}
          onClick={qtyHandler}
          onContextMenu={handleCombiantion}
        >
          {unit.dpname}
        </Name>
      </UnitWrapper>

      <QtyInput
        value={unit.qty}
        type="text"
        onClick={() => {
          inputRef.current?.select();
        }}
        onChange={setQty}
        ref={inputRef}
      />
    </Container>
  );
};

export default memo(UnitComponent);

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  justify-content: space-between;
  background-color: rgb(250 250 250);
  margin-bottom: 1px;
`;

const QtyInput = styled.input`
  height: 28px;
  width: 20px;
  text-align: center;
  font-size: 15px;
  background-color: rgb(244 244 245);
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
  justify-content: space-between;
  align-items: center;
`;

// const Percent = styled.span`
//   font-size: 11px;
// `;
