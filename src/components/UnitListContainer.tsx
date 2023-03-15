'use client';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import type { RootState } from '@/store';
import styled from '@emotion/styled';
import UnitList from './UnitList';
import CheckBoxWrapper from './CheckBoxWrapper';
import Spec from './Spec';

interface SectionProps {
  flex: number;
}

interface IsActive {
  [key: string]: boolean;
}

type SpecType = {
  [key: string]: number;
};

const isActive: IsActive = {
  스턴: false,
  이감: false,
  깍: false,
  광보잡: false,
  흔함제외퍼센트: false,
  확장팩제외: false,
  바제스: false,
  중복오라: false,
  항법이감: false,
  연구소이감: false,
};

const specData: SpecType = {
  stun: 0,
  decreaseSpeed: 0,
  onOffDecreaseSpeed: 0,
  decreaseDefense: 0,
  onOffDecreaseDefense: 0,
  single: 0,
};

const UnitListContainer = () => {
  const [isChecked, setIsChecked] = useState(isActive);
  const [spec, setSpec] = useState(specData);

  const checkHandler = (str: string) => {
    isChecked[str] = !isChecked[str];
    setIsChecked({ ...isChecked });
  };
  const unitList = useSelector((state: RootState) => state.unit);
  const common = unitList.filter(unit => unit?.grade === 'common');
  const uncommon = unitList.filter(unit => unit?.grade === 'uncommon');
  const unique = unitList.filter(unit => unit?.grade === 'unique');
  const rare = unitList.filter(unit => unit?.grade === 'rare');
  const legendary = unitList.filter(unit => unit?.grade === 'legendary');
  const hidden = unitList.filter(unit => unit?.grade === 'hidden');
  const changed = unitList.filter(unit => unit?.grade === 'changed');
  const transcendence = unitList.filter(
    unit => unit?.grade === 'transcendence',
  );
  const immortal = unitList.filter(unit => unit?.grade === 'immortal');
  const eternity = unitList.filter(unit => unit?.grade === 'eternity');
  const limited = unitList.filter(unit => unit?.grade === 'limited');
  const randomltd = unitList.filter(unit => unit?.grade === 'randomltd');

  useEffect(() => {
    for (const key in spec) {
      spec[key] = 0;
    }
    setSpec(spec);
    unitList.forEach(el => {
      setSpec(spec);
      if (el.qty) {
        if (el.stun) spec['stun'] += el.qty * +el?.stun;
        if (el.decreaseSpeed) spec['decreaseSpeed'] += +el.decreaseSpeed;
        if (el.onOffDecreaseSpeed)
          spec['onOffDecreaseSpeed'] += +el.onOffDecreaseSpeed;
        if (el.decreaseDefense) spec['decreaseDefense'] += +el.decreaseDefense;
        if (el.onOffDecreaseDefense)
          spec['onOffDecreaseDefense'] += +el.onOffDecreaseDefense;
        if (el.single) spec['single'] += el.qty * +el.single;
      }
    });
    if (isChecked['항법이감']) spec['decreaseSpeed'] += +10;
    if (isChecked['연구소이감']) spec['decreaseSpeed'] += +10;
    setSpec({ ...spec });
  }, [unitList, isChecked]);

  return (
    <>
      <Section flex={0.7}>
        <UnitList unitList={common} isChecked={isChecked} />
        <UnitList unitList={uncommon} isChecked={isChecked} />
        <CheckBoxWrapper checkHandler={checkHandler} />
      </Section>
      <Section flex={0.7}>
        <UnitList unitList={unique} isChecked={isChecked} />
      </Section>
      <Section flex={0.8}>
        <UnitList unitList={rare} isChecked={isChecked} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={legendary} isChecked={isChecked} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={hidden} isChecked={isChecked} />
        <UnitList unitList={changed} isChecked={isChecked} />
        <Spec spec={spec} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={transcendence} isChecked={isChecked} />
        <UnitList unitList={randomltd} isChecked={isChecked} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={immortal} isChecked={isChecked} />
        <UnitList unitList={eternity} isChecked={isChecked} />
        <UnitList unitList={limited} isChecked={isChecked} />
      </Section>
    </>
  );
};

export default UnitListContainer;

const Section = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
  padding-right: 5px;
`;
