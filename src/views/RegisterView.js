import React from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import LogMessage from '../components/LogError';
import { Formik, ErrorMessage } from 'formik';
import BasicFormSchema from '../helpers/validation';
import '../styles/Register.scss';

const RegisterView = () => {
  return (
    <FormContainer>
      <Title text={'Sign up'} />
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={(data, { resetForm }) => {
          this.props.onRegister(data);
          resetForm({});
        }}
        validationSchema={BasicFormSchema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            className="Register__form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              className="Register__input"
              type="text"
              name="name"
              value={values.name}
              placeholder="Login *"
              onChange={handleChange}
            />
            <ErrorMessage name="name">
              {msg => <LogMessage message={msg} />}
            </ErrorMessage>
            <input
              className="Register__input"
              type="email"
              name="email"
              value={values.email}
              placeholder="Email *"
              onChange={handleChange}
            />
            <ErrorMessage name="email">
              {msg => <LogMessage message={msg} />}
            </ErrorMessage>
            <input
              className="Register__input"
              type="password"
              name="password"
              placeholder="Password *"
              value={values.password}
              onChange={handleChange}
            />
            <ErrorMessage name="password">
              {msg => <LogMessage message={msg} />}
            </ErrorMessage>
            <Button type="submit" text={'Sign up'}></Button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
