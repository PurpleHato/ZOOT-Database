import React from 'react';
import { Column, FilterValue } from '../../types';
import './FilterControls.scss';

interface FilterControlsProps {
  columns: Column[];
  searchTerm: string;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  filterColumn: string;
  filterValue: FilterValue;
  onSearchChange: (value: string) => void;
  onSortChange: (column: string, direction: 'asc' | 'desc') => void;
  onFilterChange: (column: string, value: FilterValue) => void;
  onClearAll: () => void;
  getUniqueFilterValues: (column: string) => string[];
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  columns,
  searchTerm,
  sortColumn,
  sortDirection,
  filterColumn,
  filterValue,
  onSearchChange,
  onSortChange,
  onFilterChange,
  onClearAll,
  getUniqueFilterValues
}) => {
  const hasActiveFilters = searchTerm || sortColumn || filterColumn;

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search all fields..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label>Sort by:</label>
        <select
          value={sortColumn}
          onChange={(e) => onSortChange(e.target.value, 'asc')}
        >
          <option value="">Select column...</option>
          {columns.map(col => (
            <option key={col.key} value={col.key}>
              {col.label}
            </option>
          ))}
        </select>
        
        {sortColumn && (
          <select
            value={sortDirection}
            onChange={(e) => onSortChange(sortColumn, e.target.value as 'asc' | 'desc')}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        )}
      </div>
      
      <div className="filter-group">
        <label>Filter by:</label>
        <select
          value={filterColumn}
          onChange={(e) => onFilterChange(e.target.value, '')}
        >
          <option value="">Select column...</option>
          {columns.map(col => (
            <option key={col.key} value={col.key}>
              {col.label}
            </option>
          ))}
        </select>
        
        {filterColumn && (
          <select
            value={String(filterValue)}
            onChange={(e) => onFilterChange(filterColumn, e.target.value)}
          >
            <option value="">All values</option>
            {getUniqueFilterValues(filterColumn).map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        )}
      </div>
      
      {hasActiveFilters && (
        <div className="filter-group">
          <button onClick={onClearAll} className="clear-filters-btn">
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterControls;