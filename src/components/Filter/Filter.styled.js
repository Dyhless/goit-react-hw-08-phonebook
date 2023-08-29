import styled from 'styled-components';

export const Input = styled.input`
  min-width: 280px;
  min-height: 22px;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  border-radius: 6px;
  font-size: 18px;

  &:hover {
    border-color: #dcc8f7;
    
    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;
