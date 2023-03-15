'use client';
import { Unit } from '@/types/Unit';
import styled from '@emotion/styled';
type IsActive = {
  [key: string]: boolean;
};

interface Props {
  unit: Unit;
  isChecked: IsActive;
}

const UnitDescription = ({ unit, isChecked }: Props) => {
  return (
    <>
      {isChecked['스턴'] === true ? (
        <Description>
          {unit.stun && `${unit.stun}스턴\u00A0`}
          {unit.singleStun && '\u00A0단일스턴\u00A0'}
        </Description>
      ) : (
        ''
      )}
      {isChecked['이감'] === true ? (
        <Description>
          {unit.decreaseSpeed && `${unit.decreaseSpeed}이감\u00A0`}
          {unit.onOffDecreaseSpeed &&
            `${unit.onOffDecreaseSpeed}발동이감\u00A0`}
        </Description>
      ) : (
        ''
      )}
      {isChecked['깍'] === true ? (
        <Description>
          {unit.decreaseDefense && `${unit.decreaseDefense}깍\u00A0`}
          {unit.onOffDecreaseDefense &&
            `${unit.onOffDecreaseDefense}발동깍\u00A0`}
          {unit.armorBreak && '암브\u00A0'}
        </Description>
      ) : (
        ''
      )}
      {isChecked['광보잡'] === true ? (
        <Description>{unit.boss && `${unit.boss}\u00A0`}</Description>
      ) : (
        ''
      )}
      {isChecked['바제스'] === true ? (
        <Description>{unit.burgess && '✅\u00A0'}</Description>
      ) : (
        ''
      )}
      {isChecked['중복오라'] === true ? (
        <Description>{unit.cautionAura && '⚠️'}</Description>
      ) : (
        ''
      )}
    </>
  );
};

export default UnitDescription;

const Description = styled.span`
  font-size: 0.75rem;
`;
