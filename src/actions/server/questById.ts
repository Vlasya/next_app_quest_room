import { BASE_ENDPOINT, GUESTS } from '@/constants';
import { Quest } from '@/types';

export const questById = async (id: string): Promise<Quest | null> => {
  const res = await fetch(`${BASE_ENDPOINT}${GUESTS}${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }

  const data: Quest = await res.json();

  return data;
};
