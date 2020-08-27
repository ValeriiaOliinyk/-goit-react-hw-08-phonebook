// Base
import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import { authSelectors } from '../src/redux/auth';
import notification from './notification/notification';
import PropTypes from 'prop-types';

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

const App = ({ onGetCurretnUser, errorMessage }) => {
  // componentDidMount() {
  //   const { onGetCurretnUser } = this.props;
  //   onGetCurretnUser();
  // }

  // componentWillUnmount() {
  //   let { errorMessage } = this.props;
  //   errorMessage = '';
  //   console.log(`Очистилось ${errorMessage}`);
  // }

  const clearErrorMessage = useRef('');

  // Пофиксить

  useEffect(() => {
    onGetCurretnUser();
    return () => {
      errorMessage = clearErrorMessage.current;
      console.log(`Очистилось ${errorMessage}`);
    };
  }, [errorMessage, onGetCurretnUser]);

  if (errorMessage) notification.showError();
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<MainLoader />}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={PhonebookView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </Container>
  );
};

App.defaultProps = {
  errorMessage: '',
};

App.propTypes = {
  onGetCurretnUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  errorMessage: authSelectors.getError(state),
});

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
