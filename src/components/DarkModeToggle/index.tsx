import React from 'react';
import './DarkModeToggle.scss';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button 
      className={`dark-mode-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-icon">
        {isDark ? '☀️' : '🌙'}
      </div>
    </button>
  );
};

export default DarkModeToggle;