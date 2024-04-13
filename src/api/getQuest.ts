'use server';
import { BASE_ENDPOINT, GUESTS } from '@/constants';
import { Quest } from '@/types';
import db from '@/modules/db';

export const getQuest = async (id: string): Promise<Quest | null> => {
  // const res = await fetch(`${BASE_ENDPOINT}${GUESTS}${id}`, {
  //   next: { revalidate: 3600 },
  // });

  // if (!res.ok) {
  //   return null;
  // }

  // const data: Quest = await res.json();

  // return data;

  const quest: Quest | null = await db.quest.findUnique({
    where: {
      id: +id,
    },
  });

  return quest;
};
