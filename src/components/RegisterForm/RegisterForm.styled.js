import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
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
  min-width: 300px;
  min-height: 26px;
  padding: 1px 5px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
`;

export const Button = styled.button`
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  min-width: 140px;
  min-height: 30px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  font-weight: bold;

  padding: 10px 10px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 6px;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: #ff9f09;
  }
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 14px;
  color: black;
  max-width: 300px;
`;
