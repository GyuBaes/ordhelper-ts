import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import UnitList from './UnitList';
import styled from '@emotion/styled';

interface SectionProps {
  flex: number;
}

const UnitListContainer = () => {
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
  return (
    <>
      <Section flex={0.7}>
        <UnitList unitList={common} />
        <UnitList unitList={uncommon} />
      </Section>
      <Section flex={0.7}>
        <UnitList unitList={unique} />
      </Section>
      <Section flex={0.8}>
        <UnitList unitList={rare} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={legendary} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={hidden} />
        <UnitList unitList={changed} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={transcendence} />
        <UnitList unitList={randomltd} />
      </Section>
      <Section flex={1}>
        <UnitList unitList={immortal} />
        <UnitList unitList={eternity} />
        <UnitList unitList={limited} />
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
