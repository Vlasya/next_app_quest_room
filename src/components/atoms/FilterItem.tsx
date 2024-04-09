import React from 'react';

interface Props {
  item: { label: string; type: string };
  onChangeFilter: (newFilter: string) => void;
  isActive: boolean;
}

const FilterItem = ({ item, isActive, onChangeFilter }: Props) => {
  return (
    <div
      className={`${
        isActive ? 'bg-activeYellow' : 'bg-lightGrey'
      } ${
        isActive ? 'border-activeYellow' : 'border-borderColor'
      }font-bold  text-sm px-[28px] py-[8px] cursor-pointer border-[1px]   last:rounded-r-3xl first:rounded-l-3xl shadow-3xl`}
      onClick={() => onChangeFilter(item.type)}
    >
      {item.label}
    </div>
  );
};

export default FilterItem;
