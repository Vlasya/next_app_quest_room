import { notFound } from 'next/navigation';
import { getQuest } from '@/api/actions/getQuest';
import { InfoBlock, ModalBlock } from '@/components/molecules';
import { ClockIcon, PersonIcon, PuzzleIcon } from '@/components/icons';
import Image from 'next/image';
import { COMPLEXITY, QUEST_TYPE } from '@/constants';

interface Props {
  params: { slug: string };
}

const QuestDetailPage = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getQuest(slug);
  if (!data) {
    notFound();
  }

  const { coverImg, title, description, level, duration, peopleCount, type } =
    data;

  return (
    <>
      <Image
        fill
        priority
        src={`/${coverImg}`}
        alt='bg'
        sizes='100vw'
        className='inset-0 -top-10 -z-10 h-full w-full object-cover blur[10px] '
      />
      <div className='flex flex-col items-end h-full pt-[120px] bg-cover bg-center'>
        <div className='flex flex-col w-[780px] items-start'>
          <p className='mb-2 text-[--text-color-secondary] first-letter:uppercase'>
            {QUEST_TYPE[type]}
          </p>
          <p className='mb-6 text-[92px] leading-[87px] font-black uppercase'>
            {title}
          </p>
          <div className='pl-10'>
            <div className='mb-5 flex items-center'>
              <InfoBlock borderHeight={5} icon={<ClockIcon color='#FEC432' />}>
                {duration}хв
              </InfoBlock>
              <InfoBlock borderHeight={5} icon={<PersonIcon color='#FEC432' />}>
                {peopleCount[0]}-{peopleCount[1]} осіб
              </InfoBlock>
              <InfoBlock icon={<PuzzleIcon color='#FEC432' />}>
                {COMPLEXITY[level]}
              </InfoBlock>
            </div>
            <p className='max-w-lg mb-8'>{description}</p>
            <ModalBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestDetailPage;
