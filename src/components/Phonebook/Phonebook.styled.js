import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

export const Block = styled.div`
  border: 1px, solid;
  border-radius: 15px;
  padding: 15px;
  background-color: #ffbd33;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

export const NoContacts = styled.p`
  color: green;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
`;
export const TitleContact = styled.h2`
  margin-top: 0px;
  margin-bottom: 10px;
`;
