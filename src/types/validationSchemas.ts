import * as yup from 'yup';

export const sendFormSchema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required().length(10),
    peopleCount: yup.number().required(),
    isLegal: yup.boolean().oneOf([true], 'This field is required').required(),
  })
  .required();

export const signUpFormSchema = yup
  .object({
    username: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required(),
  })
  .required();

export const signInFormSchema = yup
  .object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Password is required'),
  })
  .required();
