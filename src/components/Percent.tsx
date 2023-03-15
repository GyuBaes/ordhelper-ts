import styled from '@emotion/styled';

interface Props {
  percent: number;
  name: string;
}

const Percent = ({ percent, name }: Props) => {
  if (!percent || name === '위습') return <></>;
  else
    return (
      <Container>
        {percent >= 100 ? `(1)\u00A0` : Math.floor(percent) + `%\u00A0`}
      </Container>
    );
};

export default Percent;

const Container = styled.span`
  font-size: 11px;
`;
