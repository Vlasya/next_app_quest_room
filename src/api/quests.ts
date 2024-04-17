'use server';
import { BASE_ENDPOINT, GUESTS } from '@/constants';
import db from '@/modules/db';

import { Quest } from '@/types/quests';

// export const getQuests = async ({}): Promise<Quest[]> => {
//   try {
//     const res = await fetch(`${BASE_ENDPOINT}${GUESTS}`);

//     return res.json();
//   } catch (error) {
//     throw new Error('Failed to fetch data');
//   }
// };

export const getQuests = async (): Promise<Quest[]> => {
  // const res: Quest[] = await db.quest.findMany({});
  const res: Quest[] = await db.quest.findMany();
  return res;
};
