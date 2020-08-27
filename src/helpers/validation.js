import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(9, 'Must be longer than 9 characters')
    .max(14, 'No longer then 14 characters')
    .required('Enter a password'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .max(9, 'No longer then 9 characters')
    .required('Enter a name'),
});

export default BasicFormSchema;
