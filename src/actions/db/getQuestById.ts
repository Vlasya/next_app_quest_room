'use server';

import { Quest } from '@/types';
import db from '@/clients/db';

export const getQuestById = async (id: string): Promise<Quest | null> => {
  const quest: Quest | null = await db.quest.findUnique({
    where: {
      id: +id,
    },
  });

  return quest;
};
