import styled from '@emotion/styled';

interface Props {
  checkHandler: (str: string) => void;
}

const formData = [
  { id: 1, name: '스턴' },
  { id: 2, name: '이감' },
  { id: 3, name: '깍' },
  { id: 4, name: '광보잡' },
  { id: 5, name: '바제스' },
  { id: 6, name: '중복오라' },
  { id: 7, name: '흔함제외퍼센트' },
  { id: 8, name: '확장팩제외' },
  { id: 9, name: '항법이감' },
  { id: 10, name: '연구소이감' },
];

const CheckBoxWrapper = ({ checkHandler }: Props) => {
  return (
    <Container>
      {formData.map(el => {
        return (
          <OptionLabel key={el.id}>
            <input
              type="checkbox"
              value={el.name}
              onClick={() => checkHandler(el.name)}
              aria-label="CheckBox"
            />
            <span>{`\u00A0${el.name}`}</span>
          </OptionLabel>
        );
      })}
    </Container>
  );
};

export default CheckBoxWrapper;

const Container = styled.div`
  padding: 0.5rem 0 0 0.2rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: 0.3rem;
`;
