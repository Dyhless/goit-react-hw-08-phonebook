import { StyledLink, NavContainer } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </NavContainer>
  );
};
