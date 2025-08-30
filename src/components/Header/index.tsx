import React from 'react';
import { ProjectConfig } from '../../types';
import DarkModeToggle from '../DarkModeToggle';
import './Header.scss';

interface HeaderProps {
  config: ProjectConfig;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, isDark, onToggleDark }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>{config.title}</h1>
          <p>{config.subtitle}</p>
        </div>
        <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
      </div>
    </div>
  );
};

export default Header;