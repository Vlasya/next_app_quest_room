import Image from 'next/image';

const notFound = () => {
  return (
    <>
      <Image
        fill
        priority
        src={'/bg.jpg'}
        alt='bg'
        sizes='100vw'
        className='inset-0 -top-10 -z-10 h-full w-full object-cover blur[10px] brightness-100'
      />
      <div className='min-w-full min-h-full flex  justify-center items-center mt-[300px]'>
        <div className='flex flex-col justify-center items-start'>
        <div className='text-activeOrange font-medium text-sm '>
          Сторінку не знайдено
        </div>
        <div className='font-extrabold text-6xl mt-[20px]'>Помилка 404</div>
        </div>
      </div>
    </>
  );
};

export default notFound;
