'use client';
import { FilterBlock } from '@/components/molecules';
import { QuestItem } from '@/components/organisms';
import { FILTERS, GENRE_TYPE } from '@/constants';
import { Quest } from '@/types';
import { useState } from 'react';

interface Props {
  quests: Quest[];
}

const GuestsBlock = ({ quests }: Props) => {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0].type);
//for react-query 
  //   const { data: quests } = useQuests();
  const handleActiveFilter = (newFilter: string) => {
    setActiveFilter(newFilter);
  };

  const getFilteredData = () => {
    if (quests) {
      if (activeFilter === GENRE_TYPE.all) {
        return quests;
      }

      return quests.filter((item) => item.type === activeFilter);
    }
  };
  const filteredData = getFilteredData();

  return (
    <div>
      <FilterBlock
        activeFilter={activeFilter}
        onChangeFilter={handleActiveFilter}
      />
      <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        {filteredData &&
          filteredData.map((item) => <QuestItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default GuestsBlock;
