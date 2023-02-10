import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 30px;
`;

export const Block = styled.div`
  border: 1px, solid;
  border-radius: 15px;
  padding: 15px;
  background-color: red;
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 15px;
  margin-bottom: 15px;
`;
