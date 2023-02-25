import { getPercent } from '@/calculator';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Unit } from '@/types/Unit';
import { useDeferredValue, memo } from 'react';
import styled from '@emotion/styled';

interface Props {
  percent: number;
}

const Percent = ({ percent }: Props) => {
  if (!percent) return <></>;
  else return <Container>{Math.floor(percent) + `%\u00A0`}</Container>;
};

export default memo(Percent);

const Container = styled.span`
  font-size: 11px;
`;
