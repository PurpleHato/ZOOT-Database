import React from 'react';
import { SubcategoryConfig } from '../../types';
import './SubcategorySelector.scss';

interface SubcategorySelectorProps {
  subcategories: Record<string, SubcategoryConfig>;
  currentSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
}

export const SubcategorySelector: React.FC<SubcategorySelectorProps> = ({
  subcategories,
  currentSubcategory,
  onSubcategoryChange
}) => {
  return (
    <div className="subcategory-selector">
      {Object.entries(subcategories).map(([key, sub]) => (
        <button
          key={key}
          className={`subcategory-button ${currentSubcategory === key ? 'active' : ''}`}
          onClick={() => onSubcategoryChange(key)}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
};

export default SubcategorySelector;