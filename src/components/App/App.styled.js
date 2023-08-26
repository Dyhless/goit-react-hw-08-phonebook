import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PhoneFrame = styled.div`
  background-color: #abb0ba;
  border-radius: 20px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
