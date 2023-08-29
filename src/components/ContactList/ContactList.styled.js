import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 0px;
`;

export const Phone = styled.p`
  color: #007afe;
  font-weight: bold;
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  padding: 5px 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #4f4f50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: #ff4539;
    border-color: white;
    font-weight: bold;
`;

export const Empty = styled.p`
  color: #383838;
`;