import React from 'react';
import { DataItem, Column } from '../../types';
import './DataTable.scss';

interface DataTableProps {
  data: DataItem[];
  columns: Column[];
  getCellClass: (item: DataItem, column: Column) => string;
  currentProject?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  getCellClass,
  currentProject
}) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="table-header">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="table-row">
              {columns.map((column) => (
                <td 
                  key={column.key} 
                  className={getCellClass(item, column)}
                >
                  {(() => {
                    const value = item[column.key];
                    
                    // Handle category pills for instruments
                    if (column.key === 'category' && currentProject === 'instruments' && value) {
                      return <span className={`category cat-${String(value).toLowerCase()}`}>{String(value)}</span>;
                    }
                    
                    if (typeof value === 'boolean') {
                      return value ? '✓' : '✗';
                    }
                    if (typeof value === 'object' && value !== null) {
                      return JSON.stringify(value);
                    }
                    return String(value || '');
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;