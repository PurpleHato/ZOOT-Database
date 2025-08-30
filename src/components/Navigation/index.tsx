import React from 'react';
import { ProjectKey, ProjectConfig } from '../../types';
import './Navigation.scss';

interface NavigationProps {
  projectConfigs: Record<ProjectKey, ProjectConfig>;
  currentProject: ProjectKey;
  onProjectChange: (project: ProjectKey) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  projectConfigs, 
  currentProject, 
  onProjectChange 
}) => {
  return (
    <nav className="nav">
      {Object.entries(projectConfigs).map(([key, project]) => (
        <button
          key={key}
          className={`nav-button ${currentProject === key ? 'active' : ''}`}
          onClick={() => onProjectChange(key as ProjectKey)}
        >
          {project.navName || project.title.split(' - ')[0]}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;