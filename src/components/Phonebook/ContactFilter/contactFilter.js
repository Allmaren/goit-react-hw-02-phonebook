import styled from 'styled-components';

export const BlockFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding-left: 10px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: 1px solid #2196f3;
  }
`;
export const Label = styled.label`
  color: #2196f3;
`;
