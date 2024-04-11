import { BASE_ENDPOINT, GUESTS } from '@/constants';
import { Quest } from '@/types/quests';

export const getQuests = async ({}): Promise<Quest[]> => {
  try {
    const res = await fetch(`${BASE_ENDPOINT}${GUESTS}`);

    return res.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
