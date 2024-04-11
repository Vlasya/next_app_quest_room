import { useQuery } from '@tanstack/react-query';
import { getQuests } from '../api/quests';
import { QueryKey } from '@/api/client';

export const useQuests = () => {
  const query = useQuery({ queryKey: [QueryKey.Quests], queryFn: getQuests });

  return {
    ...query,
  };
};
