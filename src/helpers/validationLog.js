import * as Yup from 'yup';

const schema = Yup.object().shape({
  password: Yup.string()
    .min(9, 'Must be longer than 9 characters')
    .max(14, 'No longer then 14 characters')
    .required('Enter a password'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default schema;
