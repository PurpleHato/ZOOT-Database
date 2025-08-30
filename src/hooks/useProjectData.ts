import { useQuery } from '@tanstack/react-query';
import { loadDataFromFile } from '../utils/dataLoader';
import { DataItem, ProjectKey } from '../types';

export const useProjectData = (projectKey: ProjectKey, subcategory?: string) => {
  return useQuery({
    queryKey: ['projectData', projectKey, subcategory],
    queryFn: async (): Promise<DataItem[]> => {
      // Handle main page
      if (projectKey === 'main') {
        return [];
      }

      // Handle projects with subcategories
      if (subcategory) {
        const projectConfigs = {
          dlists: {
            objects: "data/Dlists/Objects.json",
            scenes: "data/Dlists/Scenes.json",
            skeletons: "data/Dlists/Skeletons.json",
            skeletonsalt: "data/Dlists/SkeletonsAlt.json",
            skeletonsbones: "data/Dlists/SkeletonsBones.json",
            customs: "data/Dlists/CustomsSoH.json",
            others: "data/Dlists/Others.json"
          },
          dlist: {
            objects: "data/SegmentCalls/SegmentCallsObjects.json",
            scenes: "data/SegmentCalls/SegmentCallsScenes.json"
          }
        };

        const subcategoryConfig = projectConfigs[projectKey as keyof typeof projectConfigs];
        if (subcategoryConfig && subcategoryConfig[subcategory as keyof typeof subcategoryConfig]) {
          const filePath = subcategoryConfig[subcategory as keyof typeof subcategoryConfig];
          return loadDataFromFile(filePath);
        }
      }

      // Handle direct project files
      const directFiles = {
        animations: "data/Animations/Animations.json",
        sounds: "data/Sounds/Sounds.csv",
        instruments: "data/Instruments/Instruments.json"
      };

      const filePath = directFiles[projectKey as keyof typeof directFiles];
      if (filePath) {
        return loadDataFromFile(filePath);
      }

      return [];
    },
    enabled: projectKey !== 'main',
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};