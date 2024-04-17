'use server';
import db from '@/clients/db';

import { Quest } from '@/types/quests';


export const getQuests = async (): Promise<Quest[]> => {
    const res: Quest[] = await db.quest.findMany();
    return res;
  };
  