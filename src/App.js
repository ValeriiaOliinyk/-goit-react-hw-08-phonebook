// Base
import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../src/redux/auth';
import notification from './notification/notification';

// Components
import Container from '../src/components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import MainLoader from '../src/components/MainLoader';

const HomeView = lazy(() =>
  import('../src/views/HomeView' /* webpackChunkName: "home-view" */),
);
const PhonebookView = lazy(() =>
  import('../src/views/PhonebookView' /* webpackChunkName: "phonebook-view" */),
);
const RegisterView = lazy(() =>
  import('../src/views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('../src/views/LoginView' /* webpackChunkName: "login-view" */),
);

export default function App() {
  const dispatch = useDispatch();
  let errorMessage = useSelector(authSelectors.getError);
  errorMessage = useRef('');

  // Пофиксить

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    return () => {
      errorMessage.current = '';
      console.log(`Очистилось ${errorMessage}`);
    };
  }, [dispatch, errorMessage]);

  if (errorMessage) notification.showError();

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<MainLoader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/"
          />
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
