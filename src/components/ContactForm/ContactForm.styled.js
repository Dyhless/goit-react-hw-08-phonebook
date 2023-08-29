import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px;
  border: 1px orange solid;
  border-radius: 6px;
  min-width: 350px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: white;
  max-width: 300px;
`;

export const Input = styled(Field)`
  min-width: 280px;
  min-height: 22px;
  padding: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
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
  margin-top: 10px;
  background-color: #007aff;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 50%;
  border-radius: 6px;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: #ff9f09;
    border-color: white;
    font-weight: bold;
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
  max-width: 300px;
`;
