import { FILTERS } from '@/constants';
import React from 'react';
import { FilterItem } from '@/components/atoms';

interface Props {
  activeFilter: string;
  onChangeFilter: (newFilter: string) => void;
}

const FilterBlock = ({ activeFilter, onChangeFilter }: Props) => {
  return (
    <div className='flex  w-max mt-[50px]'>
      {FILTERS.map((item) => (
        <FilterItem
          key={item.label}
          onChangeFilter={onChangeFilter}
          item={item}
          isActive={activeFilter === item.type}
        />
      ))}
    </div>
  );
};

export default FilterBlock;
