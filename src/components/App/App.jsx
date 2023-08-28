import { ToastContainer } from 'react-toastify';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/authentication/connectionsApi';
import { useAuth } from 'hooks';
import { MainContainer } from './App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <MainContainer>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register key="register" />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Login key="login" />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Contacts key="contacts" />}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isRefreshing && <p>Refreshing user...</p>}
    </MainContainer>
  );
};
