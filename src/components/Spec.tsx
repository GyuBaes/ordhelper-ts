import styled from '@emotion/styled';

type Spec = {
  [key: string]: number;
};

interface Props {
  spec: Spec;
}

const Spec = ({ spec }: Props) => {
  return (
    <Container>
      <SpecDetail>{`${spec['stun'].toFixed(1)} 스턴`}</SpecDetail>
      <SpecDetail>
        {`${spec['decreaseSpeed'] + spec['onOffDecreaseSpeed']} 이감 (${
          spec['decreaseSpeed']
        } + ${spec['onOffDecreaseSpeed']}발동)`}
      </SpecDetail>
      <SpecDetail>
        {`${spec['decreaseDefense'] + spec['onOffDecreaseDefense']} 깍 (${
          spec['decreaseDefense']
        } + ${spec['onOffDecreaseDefense']}발동)`}
      </SpecDetail>
      <SpecDetail
        style={{ fontSize: '0.7rem' }}
      >{`ㄴ 암브,강화 특강 제외 참고용`}</SpecDetail>
      <SpecDetail>{`${spec['single']} 단일`}</SpecDetail>
    </Container>
  );
};

export default Spec;

const SpecDetail = styled.span``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.25rem;
  padding-top: 0.5rem;
`;
