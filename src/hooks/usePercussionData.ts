import { useQuery } from '@tanstack/react-query';
import { PercussionItem, ProjectKey } from '../types';

export const usePercussionData = (projectKey: ProjectKey) => {
  return useQuery({
    queryKey: ['percussionData', projectKey],
    queryFn: async (): Promise<PercussionItem[]> => {
      const percussionFiles = {
        instruments: "data/Instruments/Percussions.json"
      };

      const filePath = percussionFiles[projectKey as keyof typeof percussionFiles];
      if (!filePath) {
        return [];
      }

      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch percussion data: ${response.status}`);
      }

      return response.json();
    },
    enabled: projectKey === 'instruments',
    staleTime: 10 * 60 * 1000,
  });
};