import styled from 'styled-components';

export const List = styled.li`
  list-style-type: none;
  padding: 5px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
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

export const Ol = styled.ul`
  padding-left: 0px;
  text-decoration: none;
`;
