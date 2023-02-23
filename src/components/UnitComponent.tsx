/** @jsxImportSource @emotion/react */
'use client';
import { Unit } from '@/types/Unit';
import { useDispatch } from 'react-redux';
import { addUnitQty, setUnitQty } from '@/reducer/unitList';
import styled from '@emotion/styled';
import { useRef, useEffect, memo } from 'react';

interface Props {
  unit: Unit;
}

const UnitComponent = ({ unit }: Props) => {
  const dispatch = useDispatch();

  const qtyHandler = () => {
    dispatch(addUnitQty(unit.index));
  };

  const setQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnitQty({ value: +e.target.value, index: unit.index }));
    inputRef.current?.select();
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <span onClick={qtyHandler}>{unit.name}</span>
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

const Container = styled.div`
  display: flex;
`;

const QtyInput = styled.input`
  height: 20px;
  width: 20px;
  text-align: center;
`;
export default memo(UnitComponent);
