import React from 'react';
import './TableStats.scss';

interface TableStatsProps {
  totalEntries: number;
  filteredEntries: number;
}

export const TableStats: React.FC<TableStatsProps> = ({
  totalEntries,
  filteredEntries
}) => {
  return (
    <div className="table-stats">
      <div className="stat-item">
        <span className="stat-number">{totalEntries}</span>
        <span className="stat-label">Total Entries</span>
      </div>
      {totalEntries !== filteredEntries && (
        <div className="stat-item">
          <span className="stat-number">{filteredEntries}</span>
          <span className="stat-label">Showing</span>
        </div>
      )}
    </div>
  );
};

export default TableStats;