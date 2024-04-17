'use client';

import { SignUpFormType } from '@/types';
import { ErrorField } from '@/components/atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';



const SignUpForm = () => {
  const schema = yup
    .object({
      name: yup
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

  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm<SignUpFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    // sendNewUserForm(data);
    console.log('data', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' bg-black p-[20px] rounded-[6px] flex flex-col'
    >
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='name'>Name</label>
        <input
          {...register('name')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='name'
          name='name'
          placeholder='Name'
        />
        {formErrors.name && (
          <ErrorField errorMessage={formErrors.name.message} />
        )}
      </div>
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='email'>Email</label>
        <input
          {...register('email')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='email'
          name='email'
          placeholder='Email'
        />
        {formErrors.email && (
          <ErrorField errorMessage={formErrors.email.message} />
        )}
      </div>
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='password'>Password</label>
        <input
          {...register('password')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='password'
          name='password'
          type='password'
        />
        {formErrors.password && (
          <ErrorField errorMessage={formErrors.password.message} />
        )}
      </div>
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='passwordConfirmation'>Repeat Password</label>
        <input
          {...register('passwordConfirmation')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='passwordConfirmation'
          name='passwordConfirmation'
          type='password'
        />
        {formErrors.passwordConfirmation && (
          <ErrorField errorMessage={formErrors.passwordConfirmation.message} />
        )}
      </div>
      <button
        className='w-[230px] h-[47px] bg-activeYellow  text-activeBtnText rounded-[6px] self-center'
        type='submit'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
