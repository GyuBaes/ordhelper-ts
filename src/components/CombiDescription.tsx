import styled from '@emotion/styled';

interface Props {
  combiDescription: string | undefined;
  isHover: boolean;
}

const CombiDescription = ({ combiDescription, isHover }: Props) => {
  if (combiDescription)
    return (
      <Container isHover={isHover}>
        <Description>{combiDescription}</Description>
      </Container>
    );
  else return <></>;
};
export default CombiDescription;

const Container = styled.div<{ isHover: boolean }>`
  display: ${props => (props.isHover ? 'flex' : 'none')};
  position: fixed;
  bottom: 8.2rem;
  right: 1rem;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem 0 0.5rem 1rem;
  border-radius: 1%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.42);
`;

const Description = styled.span`
  font-size: 0.85rem;
  padding-right: 1rem;
`;
