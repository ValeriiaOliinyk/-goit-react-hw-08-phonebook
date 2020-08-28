import React from 'react';
import { authOperations } from '../redux/auth';
import { useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import LogMessage from '../components/LogError';
import { Formik, ErrorMessage } from 'formik';
import schema from '../helpers/validationLog';
import '../styles/Login.scss';

const LoginView = () => {
  const dispatch = useDispatch();
  return (
    <FormContainer>
      <Title text={'Sign in'} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(data, { resetForm }) => {
          dispatch(authOperations.logIn(data));
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

export default LoginView;
