import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authentication/connectionsApi';
import { useAuth } from 'hooks';
import { AccentText, Container, UserText, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserText>
        Account - <AccentText>{user.name}</AccentText>
      </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
