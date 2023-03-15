import { LowestMaterial } from '@/types/Unit';
import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
  lessUnit: LowestMaterial[] | undefined;
  isHover: boolean;
}
const LessLowestUnit = ({ lessUnit, isHover }: Props) => {
  if (lessUnit)
    return (
      <Container isHover={isHover}>
        {lessUnit.map(el => {
          if (el.qty)
            return (
              <UnitContainer key={el.name}>
                <Image
                  alt={`${el.dpname}`}
                  src={`/images/${el.urn}.webp`}
                  width={30}
                  height={30}
                />
                <UnitInfo>{`${el.name} x ${el.qty}`}</UnitInfo>
              </UnitContainer>
            );
        })}
      </Container>
    );
  else return <></>;
};

export default LessLowestUnit;

const Container = styled.div<{ isHover: boolean }>`
  display: ${props => (props.isHover ? 'flex' : 'none')};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  align-items: center;
  background-color: #fff;
  padding: 0.6rem 0 0.6rem 0.5rem;
  border-radius: 1%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
`;

const UnitInfo = styled.div`
  font-size: 1rem;
  padding: 0 0.5rem 0 0.5rem;
`;

const UnitContainer = styled.div`
  display: flex;
  align-items: center;
`;
