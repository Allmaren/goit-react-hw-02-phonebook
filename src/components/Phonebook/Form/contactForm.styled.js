import styled from 'styled-components';

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 15px;
  margin-bottom: 15px;
  align-items: center;
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
export const Button = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #fff;
  color: chocolate;

  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.2);
    background-color: coral;
    color: darkslategray;
  }
`;
