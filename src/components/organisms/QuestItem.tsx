import { Quest } from '@/types/quests';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { InfoBlock } from '@/components/molecules';
import { PuzzleIcon, PersonIcon } from '@/components/icons';
import { COMPLEXITY } from '@/constants';

interface Props {
  item: Quest;
}

const QuestItem = ({ item }: Props) => {
  const { id, title, peopleCount, level } = item;

  return (
    <Link
      href={`detailed-quest/${id}`}
      className="relative w-[344px] h-[232px] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-4/5 after:bg-gradient-to-t after:from-black after:rounded-md"
    >
      <Image
        src={`/${item.previewImg}`}
        alt='Quest image'
        fill
        className='rounded-md'
      />

      <div className='absolute bottom-4 right-4 z-10 flex flex-col items-end'>
        <p className='text-2xl font-bold'>{title}</p>
        <div className='flex items-center'>
          <InfoBlock borderHeight={5} isGrey icon={<PersonIcon />}>
            {peopleCount[0]}-{peopleCount[1]} чел
          </InfoBlock>
          <InfoBlock isGrey icon={<PuzzleIcon />}>
            {COMPLEXITY[level]}
          </InfoBlock>
        </div>
      </div>
    </Link>
  );
};

export default QuestItem;
