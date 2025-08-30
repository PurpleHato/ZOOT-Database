// Data types
export interface DataItem {
  [key: string]: any;
}

export interface PercussionItem {
  location: string;
  details: string;
}

export interface ProjectConfig {
  title: string;
  subtitle: string;
  navName?: string;
  isMainPage?: boolean;
  hasPercussion?: boolean;
  hasSubcategories?: boolean;
  dynamicColumns?: boolean;
  subcategories?: Record<string, SubcategoryConfig>;
}

export interface SubcategoryConfig {
  name: string;
  dataFile: string;
}

export interface Column {
  key: string;
  label: string;
  searchable?: boolean;
  sortable?: boolean;
  filterable?: boolean;
}

export type ProjectKey = 'main' | 'dlists' | 'dlist' | 'animations' | 'sounds' | 'instruments';
export type FilterValue = string | number | boolean | null;

// Component props
export interface AppState {
  currentProject: ProjectKey;
  currentSubcategory: string;
  searchTerm: string;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  filterColumn: string;
  filterValue: FilterValue;
  data: Record<string, DataItem[]>;
  percussionData: Record<string, PercussionItem[]>;
  isLoading: boolean;
  error: string | null;
}