/** @jsxImportSource @emotion/react */
'use client';
import { Unit } from '@/types/Unit';
import { useDispatch } from 'react-redux';
import { addUnitQty, setUnitQty } from '@/reducer/unitList';
import styled from '@emotion/styled';
import { useRef, memo } from 'react';
import Image from 'next/image';

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
      <UnitWrapper>
        <Image
          alt={`${unit.dpname}`}
          src={`/images/${unit.urn}.webp`}
          width={28}
          height={28}
          placeholder="empty"
        />

        <Name onClick={qtyHandler}>{unit.dpname}</Name>
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
`;

const QtyInput = styled.input`
  height: 20px;
  width: 20px;
  text-align: center;
`;

const Name = styled.div``;

const UnitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
