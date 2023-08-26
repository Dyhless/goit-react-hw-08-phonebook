import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 95%;
  border-radius: 6px;
  font-size: 18px;
  &:hover {
    border-color: #dcc8f7;
    
    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const Button = styled.button`
  padding: 10px 10px;
  background-color: #007aff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 6px;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: #ff9f09;
    border-color: white;
`;