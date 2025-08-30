import React, { useState, useMemo } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './queryClient';
import { useProjectData } from './hooks/useProjectData';
import { usePercussionData } from './hooks/usePercussionData';
import { useDarkMode } from './hooks/useDarkMode';
import { ProjectKey, ProjectConfig, Column, DataItem, FilterValue } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SubcategorySelector from './components/SubcategorySelector';
import FilterControls from './components/FilterControls';
import TableStats from './components/TableStats';
import DataTable from './components/DataTable';
import MainPageContent from './components/MainPageContent';
import './App.scss';

// Project configurations - organized in preferred order
const projectConfigs: Record<ProjectKey, ProjectConfig> = {
  main: {
    title: "🎮 Zelda: Ocarina of Time - Asset Database",
    subtitle: "Your comprehensive resource for game asset management and modding",
    navName: "🎮 Introduction",
    isMainPage: true
  },
  dlists: {
    title: '🗂️ Zelda: Ocarina of Time - Display Lists Database',
    subtitle: 'Comprehensive display lists information for decomp and Ship of Harkinian projects',
    navName: "🗂️ Display Lists",
    hasPercussion: false,
    hasSubcategories: true,
    dynamicColumns: true,
    subcategories: {
      objects: {
        name: 'Objects',
        dataFile: "data/Dlists/Objects.json"
      },
      scenes: {
        name: 'Scenes',
        dataFile: "data/Dlists/Scenes.json"
      },
      skeletons: {
        name: 'Skeletons',
        dataFile: "data/Dlists/Skeletons.json"
      },
      skeletonsalt: {
        name: 'Skeletons Alt',
        dataFile: "data/Dlists/SkeletonsAlt.json"
      },
      skeletonsbones: {
        name: 'Skeleton Bones',
        dataFile: "data/Dlists/SkeletonsBones.json"
      },
      customs: {
        name: 'Customs SoH',
        dataFile: "data/Dlists/CustomsSoH.json"
      },
      others: {
        name: 'Others',
        dataFile: "data/Dlists/Others.json"
      }
    }
  },
  dlist: {
    title: '📋 Zelda: Ocarina of Time - Segment Calls Database',
    subtitle: 'Essential segment call information for maintaining special effects when replacing models',
    navName: "📋 Segment Calls",
    hasPercussion: false,
    hasSubcategories: true,
    subcategories: {
      objects: {
        name: 'Objects',
        dataFile: "data/SegmentCalls/SegmentCallsObjects.json"
      },
      scenes: {
        name: 'Scenes',
        dataFile: "data/SegmentCalls/SegmentCallsScenes.json"
      }
    }
  },
  animations: {
    title: '🎬 Zelda: Ocarina of Time - Animations Database',
    subtitle: 'Complete character and object animation data for both decomp and Ship of Harkinian projects',
    navName: "🎬 Animations",
    hasPercussion: false,
    hasSubcategories: false
  },
  sounds: {
    title: '🔊 Zelda: Ocarina of Time - Sounds Database',
    subtitle: 'Audio samples and effects with technical specifications for custom sound implementation',
    navName: "🔊 Sounds",
    hasPercussion: false,
    hasSubcategories: false
  },
  instruments: {
    title: '🎵 Zelda: Ocarina of Time - Instruments Database',
    subtitle: 'Musical instrument sets and sample information for custom soundtrack creation',
    navName: "🎵 Instruments",
    hasPercussion: true,
    hasSubcategories: false
  }
};

const AppContent: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<ProjectKey>('main');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterColumn, setFilterColumn] = useState<string>('');
  const [filterValue, setFilterValue] = useState<FilterValue>('');
  const { isDark, toggleDarkMode } = useDarkMode();

  const config = projectConfigs[currentProject];
  
  // Get default subcategory based on current project
  const getDefaultSubcategory = (projectKey: ProjectKey): string => {
    const projectConfig = projectConfigs[projectKey];
    if (projectConfig.hasSubcategories && projectConfig.subcategories) {
      return Object.keys(projectConfig.subcategories)[0];
    }
    return '';
  };
  
  const [currentSubcategory, setCurrentSubcategory] = useState<string>(getDefaultSubcategory(currentProject));
  
  // Use React Query hooks for data fetching
  const { data = [], isLoading, error } = useProjectData(currentProject, currentSubcategory);
  const { data: percussionData = [] } = usePercussionData(currentProject);

  // Generate columns dynamically for projects with dynamic columns or based on data
  const columns: Column[] = useMemo(() => {
    if (!data.length) {
      return [];
    }
    
    const firstItem = data[0];
    return Object.keys(firstItem).map(key => {
      // Better label formatting that handles common abbreviations
      let label = key;
      
      // Handle specific cases first
      const specificReplacements: Record<string, string> = {
        'SoH Directory': 'SoH Directory',
        'SoH Name (For Export)': 'SoH Name (For Export)',
        'Decomp Directory': 'Decomp Directory', 
        'Decomp File Name (For Import)': 'Decomp File Name (For Import)',
        'Out of Range?': 'Out of Range?',
        'PRed ?': 'PRed ?'
      };
      
      if (specificReplacements[key]) {
        label = specificReplacements[key];
      } else {
        // For other keys, use the original logic but preserve common abbreviations
        label = key
          .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase
          .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
      }
      
      return {
        key,
        label,
        searchable: true,
        sortable: true,
        filterable: true
      };
    });
  }, [data]);

  // Get cell CSS class for styling
  const getCellClass = (item: DataItem, column: Column): string => {
    const key = column.key;
    
    // Field-specific styling for different databases
    const fieldClasses: Record<string, string> = {
      // Display Lists styling
      'scene name': 'cell-green-tech',
      'object name': 'cell-purple-tech', 
      'skeleton name': 'cell-teal-tech',
      'bone name': 'cell-orange-tech',
      'source model file': 'cell-blue-tech',
      'soh skel name': 'cell-red-tech',
      'decomp filename': 'cell-indigo-tech',
      'soh filename': 'cell-brown-tech-small',
      'decomp skel': 'cell-green-small',
      'soh skel': 'cell-red-small',
      
      // Segment Calls styling  
      'segment call': 'cell-purple-tech',
      'location': 'cell-teal-tech',
      'instructions': 'cell-orange-tech',
      'matches': 'cell-pink-small',
      
      // Animations styling
      'animation name': 'cell-blue-tech',
      'character': 'cell-green-tech',
      'type': 'cell-red-tech',
      
      // Sounds styling
      'filename': 'cell-indigo-tech',
      'sample rate': 'cell-brown-tech-small',
      'channels': 'cell-green-small',
      'format': 'cell-red-small',
      'size': 'cell-pink-small',
      'description': 'cell-standard',
      
      // Instruments styling
      'setid': 'cell-green-tech',
      'slot': 'cell-purple-tech',
      'instrument': 'cell-blue-tech',
      'category': 'cell-orange-tech',
      'notes': 'cell-standard'
    };
    
    const fieldKey = key.toLowerCase();
    const fieldClass = fieldClasses[fieldKey];
    
    if (fieldClass) {
      return fieldClass;
    }
    
    return 'cell-standard';
  };

  // Filter and sort data
  const processedData = useMemo(() => {
    let filtered = [...data];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Apply column filter
    if (filterColumn && filterValue !== '') {
      filtered = filtered.filter(item => {
        const itemValue = String(item[filterColumn]).toLowerCase();
        const searchValue = String(filterValue).toLowerCase();
        return itemValue.includes(searchValue);
      });
    }
    
    // Apply sorting
    if (sortColumn) {
      filtered.sort((a, b) => {
        const aVal = a[sortColumn];
        const bVal = b[sortColumn];
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        const aStr = String(aVal).toLowerCase();
        const bStr = String(bVal).toLowerCase();
        
        if (sortDirection === 'asc') {
          return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
        } else {
          return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
        }
      });
    }
    
    return filtered;
  }, [data, searchTerm, filterColumn, filterValue, sortColumn, sortDirection]);

  const shouldShowTable = currentProject !== 'main' && !isLoading && !error && data.length > 0;

  const getUniqueFilterValues = (column: string): string[] => {
    const values = data.map(item => String(item[column])).filter(Boolean);
    return Array.from(new Set(values)).sort();
  };

  const handleProjectChange = (newProject: ProjectKey) => {
    setCurrentProject(newProject);
    setCurrentSubcategory(getDefaultSubcategory(newProject));
  };

  return (
    <div className={`container ${config.isMainPage ? 'main-page' : ''}`}>
      <Header config={config} isDark={isDark} onToggleDark={toggleDarkMode} />
      <Navigation 
        projectConfigs={projectConfigs}
        currentProject={currentProject}
        onProjectChange={handleProjectChange}
      />

      {config.isMainPage && <MainPageContent />}
      
      {config.hasSubcategories && config.subcategories && (
        <SubcategorySelector
          subcategories={config.subcategories}
          currentSubcategory={currentSubcategory}
          onSubcategoryChange={setCurrentSubcategory}
        />
      )}
      
      {isLoading && (
        <div className="loading">
          <p>Loading data...</p>
        </div>
      )}
      
      {error && (
        <div className="error">
          <p>Error loading data: {error instanceof Error ? error.message : String(error)}</p>
        </div>
      )}
      
      {shouldShowTable && (
        <FilterControls
          columns={columns}
          searchTerm={searchTerm}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          filterColumn={filterColumn}
          filterValue={filterValue}
          onSearchChange={setSearchTerm}
          onSortChange={(column, direction) => {
            setSortColumn(column);
            setSortDirection(direction);
          }}
          onFilterChange={(column, value) => {
            setFilterColumn(column);
            setFilterValue(value);
          }}
          onClearAll={() => {
            setSearchTerm('');
            setSortColumn('');
            setSortDirection('asc');
            setFilterColumn('');
            setFilterValue('');
          }}
          getUniqueFilterValues={getUniqueFilterValues}
        />
      )}
      
      {shouldShowTable && (
        <div className="table-section">
          <TableStats
            totalEntries={data.length}
            filteredEntries={processedData.length}
          />
          <DataTable
            data={processedData}
            columns={columns}
            getCellClass={getCellClass}
            currentProject={currentProject}
          />
        </div>
      )}
      
      {config.hasPercussion && percussionData.length > 0 && shouldShowTable && (
        <div className="percussion-section">
          <div className="percussion-title">🥁 Percussion Maps</div>
          <div className="percussion-grid">
            {percussionData.map((item, index) => (
              <div key={index} className="percussion-item">
                <div className="percussion-location">{item.location}</div>
                <div className="percussion-details">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;