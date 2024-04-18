'use client';
import { SignInFormType, signInFormSchema } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ErrorField } from '@/components/atoms';
import { SignIn } from '@/actions/db/auth';

const SignInForm = () => {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm<SignInFormType>({
    resolver: yupResolver(signInFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormType> = async (
    formData: SignInFormType
  ) => {
    const result = await SignIn(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('Yyyyyyeeep!Hello!');
      router.push('/');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' bg-black p-[20px] rounded-[6px] flex flex-col'
    >
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

      <button
        className='w-[230px] h-[47px] bg-activeYellow  text-activeBtnText rounded-[6px] self-center'
        type='submit'
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
