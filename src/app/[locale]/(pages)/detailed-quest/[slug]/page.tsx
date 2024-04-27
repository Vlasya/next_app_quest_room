import { notFound } from 'next/navigation';
import { InfoBlock, ModalBlock } from '@/components/molecules';
import { ClockIcon, PersonIcon, PuzzleIcon } from '@/components/icons';
import Image from 'next/image';
import { COMPLEXITY, QUEST_TYPE } from '@/constants';
import { getQuestById } from '@/actions/db/getQuestById';
import initTranslations from '@/app/i18n';

interface Props {
  params: { slug: string; locale: string };
}

const QuestDetailPage = async ({ params }: Props) => {
  const { t } = await initTranslations(params.locale, ['default']);
  const { slug } = params;
  const data = await getQuestById(slug);
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
            {t(`${type}`)}
          </p>
          <p className='mb-6 text-[92px] leading-[87px] font-black uppercase'>
            {title}
          </p>
          <div className='pl-10'>
            <div className='mb-5 flex items-center'>
              <InfoBlock borderHeight={5} icon={<ClockIcon color='#FEC432' />}>
                {duration}
                {t('min')}
              </InfoBlock>
              <InfoBlock borderHeight={5} icon={<PersonIcon color='#FEC432' />}>
                {peopleCount[0]}-{peopleCount[1]} {t('persons')}
              </InfoBlock>
              <InfoBlock icon={<PuzzleIcon color='#FEC432' />}>
                {t(`${level}`)}
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
