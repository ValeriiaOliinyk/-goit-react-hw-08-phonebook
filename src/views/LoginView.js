import React from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import LogMessage from '../components/LogError';
import { Formik, ErrorMessage } from 'formik';
import schema from '../helpers/validationLog';
import '../styles/Login.scss';

const LoginView = ({ onLogin }) => {
  return (
    <FormContainer>
      <Title text={'Sign in'} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(data, { resetForm }) => {
          onLogin(data);
          resetForm({});
        }}
        validationSchema={schema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            className="Login__form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              className="Login__input"
              type="email"
              name="email"
              placeholder="Email *"
              value={values.email}
              onChange={handleChange}
            />
            <ErrorMessage name="email">
              {msg => <LogMessage message={msg} />}
            </ErrorMessage>
            <input
              className="Login__input"
              type="password"
              name="password"
              placeholder="Password *"
              value={values.password}
              onChange={handleChange}
            />
            <ErrorMessage name="password">
              {msg => <LogMessage message={msg} />}
            </ErrorMessage>
            <Button type="submit" text={'Sign in'}></Button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
