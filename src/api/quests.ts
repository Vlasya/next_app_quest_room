import { BASE_ENDPOINT, GUESTS } from '@/constants';
import { Quests } from '@/types/quests';

export const getQuests = async ({}): Promise<Quests[]> => {
  try {
    const res = await fetch(`${BASE_ENDPOINT}${GUESTS}`);

    return res.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
