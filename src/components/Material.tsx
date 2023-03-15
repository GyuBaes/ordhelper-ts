import { Material } from '@/types/Unit';
import styled from '@emotion/styled';
import Image from 'next/image';
import { memo } from 'react';

interface Props {
  material: Material[] | undefined;
  isHover: boolean;
  grade: string;
}

const Material = ({ material, isHover, grade }: Props) => {
  if (material && grade !== 'common' && grade !== 'uncommon')
    return (
      <Container isHover={isHover}>
        {material.map(el => {
          return (
            <UnitContainer key={el.name}>
              <Image
                alt={`${el.dpname}`}
                src={`/images/${el.urn}.webp`}
                width={35}
                height={35}
              />
              <MaterialInfo>{`${el.dpname} x ${el.qty}`}</MaterialInfo>
            </UnitContainer>
          );
        })}
      </Container>
    );
  else return <></>;
};

export default memo(Material);

const Container = styled.div<{ isHover: boolean }>`
  display: ${props => (props.isHover ? 'flex' : 'none')};
  position: fixed;
  bottom: 4.5rem;
  right: 1rem;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem 0 0.5rem 1rem;
  border-radius: 1%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
`;

const MaterialInfo = styled.div`
  padding: 0 1rem 0 0.5rem;
`;

const UnitContainer = styled.div`
  display: flex;
  align-items: center;
`;
