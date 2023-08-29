import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

export const UserText = styled.p`
  font-weight: 900;
`;

export const AccentText = styled.span`
  color: white;
`;

export const Button = styled.button`
  padding: 10px 30px;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  font-weight: bold;
  background-color: #4f4f50;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: #ff4539;
  }
`;
