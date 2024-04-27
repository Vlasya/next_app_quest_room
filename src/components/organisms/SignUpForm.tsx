'use client';

import { SignUpFormType, signUpFormSchema } from '@/types';
import { ErrorField } from '@/components/atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUp } from '@/actions/db/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const { t } = useTranslation();
  
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm<SignUpFormType>({
    resolver: yupResolver(signUpFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormType> = async (
    formData: SignUpFormType
  ) => {
    const { passwordConfirmation, ...user } = formData;

    const result = await signUp(user);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('Yyyyyyeeep!User has been created!');
      router.push('/');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' bg-black p-[20px] rounded-[6px] flex flex-col'
    >
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='name'>{t('name')}</label>
        <input
          {...register('username')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='name'
          name='username'
          placeholder='Name'
        />
        {formErrors.username && (
          <ErrorField errorMessage={formErrors.username.message} />
        )}
      </div>
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='email'>{t('email')}</label>
        <input
          {...register('email')}
          className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] mt-[5px]'
          id='email'
          name='email'
          placeholder={t('email')}
        />
        {formErrors.email && (
          <ErrorField errorMessage={formErrors.email.message} />
        )}
      </div>
      <div className='flex flex-col mb-[30px] '>
        <label htmlFor='password'>{t('password')}</label>
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
        <label htmlFor='passwordConfirmation'>{t('repeatPassword')}</label>
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
       {t('signUp')}
      </button>
    </form>
  );
};

export default SignUpForm;
