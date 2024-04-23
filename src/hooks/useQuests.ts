import { useQuery } from '@tanstack/react-query';

import { QueryKey } from '@/clients/queryClient';
import { getQuestsQuery } from '@/actions/http/getQuestsQuery';

export const useQuests = () => {
  const query = useQuery({
    queryKey: [QueryKey.Quests],
    queryFn: getQuestsQuery,
  });

  return {
    ...query,
  };
};
