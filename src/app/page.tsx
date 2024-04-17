import Image from 'next/image';
import { GuestsBlock } from '@/components/organisms';
import { getQuests } from '@/actions/db/getQuests';

const Home = async () => {
  const quests = await getQuests();
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
      <div className='max-w-[1080px] my-[0px] mx-auto flex flex-col mt-[50px]'>
        <div className='text-activeOrange font-medium text-sm'>
          Ігри у Дніпрі
        </div>
        <h1 className='text-6xl font-extrabold mt-[15px]'>
          В яку гру зіграємо?
        </h1>
        <GuestsBlock quests={quests} />
      </div>
    </>
  );
};

export default Home;
