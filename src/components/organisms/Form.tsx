import { FormType } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorField } from '@/components/atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { sendForm } from '@/api/sendForm';
import { toast } from 'react-hot-toast';

interface Props {
  onClose: () => void;
}

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required().length(10),
    peopleCount: yup.number().required(),
    isLegal: yup.boolean().oneOf([true], 'This field is required').required(),
  })
  .required();

const Form = ({ onClose }: Props) => {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      isLegal: false,
    },
  });

  const { mutate: sendNewUserForm } = useMutation({
    mutationFn: sendForm,
    onSuccess: (data) => {
      toast.success('The form has been successfully submitted!');
      onClose();
    },
    onError: (error) => {
      throw new Error('Failed registration');
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    sendNewUserForm(data);
  };

  return (
    <div className=' min-w-full min-h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <div className='flex flex-col mb-[30px] '>
          <input
            placeholder="Ваше ім'я"
            {...register('name')}
            className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px]'
          />
          {formErrors.name && (
            <ErrorField errorMessage={formErrors.name.message} />
          )}
        </div>
        <div className='flex flex-col mb-[30px] '>
          <input
            placeholder='Ваш номер телефону'
            {...register('phone')}
            className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] '
          />

          {formErrors.phone && (
            <ErrorField errorMessage={formErrors.phone.message} />
          )}
        </div>

        <div className='flex flex-col mb-[30px] '>
          <input
            placeholder='Кількість гравців'
            defaultValue={1}
            type='number'
            {...register('peopleCount')}
            className='w-[400px] h-[50px] bg-baseDark rounded-[6px] p-[5px] '
          />

          {formErrors.peopleCount && (
            <ErrorField errorMessage={formErrors.peopleCount.message} />
          )}
        </div>
        <div className='flex flex-col mb-[30px] self-start ml-[5px] '>
          <label className='text-sm'>
            <input
              className='mr-[5px]'
              type='checkbox'
              {...register('isLegal')}
            />
            Погоджуюсь з правилами обробки персональних даних та угодою
            користувачів
          </label>

          {formErrors.isLegal && (
            <ErrorField errorMessage={formErrors.isLegal.message} />
          )}
        </div>
        <button
          className='w-[230px] h-[47px] bg-activeYellow  text-activeBtnText rounded-[6px]'
          type='submit'
        >
          Відправити заявку{' '}
        </button>
      </form>
    </div>
  );
};

export default Form;