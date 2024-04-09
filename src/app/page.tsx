'use client';
import { FilterBlock, QuestItem } from '@/components/molecules';
import { FILTERS, GENRE_TYPE } from '@/constants';
import { useQuests } from '@/hooks/useQuests';
import { useState } from 'react';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0].type);

  const { data: questsData } = useQuests();

  const handleActiveFilter = (newFilter: string) => {
    setActiveFilter(newFilter);
  };

  const getFilteredData = () => {
    if (questsData) {
      if (activeFilter === GENRE_TYPE.all) {
        return questsData;
      }

      return questsData.filter((item) => item.type === activeFilter);
    }
  };
  const filteredData = getFilteredData();
  
  return (
    <div className='max-w-[1080px] my-[0px] mx-auto flex flex-col mt-[50px]'>
      <div className='text-activeOrange font-medium text-sm'>Ігри у Дніпрі</div>
      <h1 className='text-6xl font-extrabold mt-[15px]'>В яку гру зіграємо?</h1>

      <FilterBlock
        activeFilter={activeFilter}
        onChangeFilter={handleActiveFilter}
      />
      <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        {filteredData&&filteredData.map(item=>(
          <QuestItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
