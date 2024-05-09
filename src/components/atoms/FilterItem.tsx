'use client';
import initTranslations from '@/app/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  item: { label: string; type: string };
  onChangeFilter: (newFilter: string) => void;
  isActive: boolean;
}

const FilterItem = ({ item, isActive, onChangeFilter }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${isActive ? 'bg-activeYellow' : 'bg-lightGrey'} ${
        isActive ? 'border-activeYellow' : 'border-borderColor'
      }font-bold  text-sm px-[28px] py-[8px] cursor-pointer border-[1px]   last:rounded-r-3xl first:rounded-l-3xl shadow-3xl`}
      onClick={() => onChangeFilter(item.type)}
    >
      {t(`${item.label}`)}
    </div>
  );
};

export default FilterItem;
