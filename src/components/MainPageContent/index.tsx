import React from 'react';
import './MainPageContent.scss';

export const MainPageContent: React.FC = () => {
  return (
    <div className="main-page-content">
      <div className="main-page-text">
        <h2>🎮 Welcome to the Zelda: Ocarina of Time Asset Database</h2>
        
        <p>This comprehensive database provides essential information for modders and enthusiasts working with Zelda: Ocarina of Time assets. Whether you're creating custom music, replacing models, or working with special effects, you'll find the technical details you need here.</p>
        
        <div className="getting-started">
          <h3>🚀 Getting Started</h3>
          <p>Use the navigation tabs above to explore different sections of the database:</p>
          <ul>
            <li><strong>Display Lists:</strong> Visual model and skeleton information for 3D assets</li>
            <li><strong>Segment Calls:</strong> Integration tools for special effects preservation</li>
            <li><strong>Animations:</strong> Character and object movement data for dynamic content</li>
            <li><strong>Sounds:</strong> Audio samples and effects with technical specifications</li>
            <li><strong>Instruments:</strong> Musical instrument sets for custom soundtracks</li>
          </ul>
        </div>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🗂️ Display Lists Database</h3>
            <p>Comprehensive display lists information for both decomp and Ship of Harkinian projects. Essential for model development and asset management across different project types.</p>
            <ul>
              <li>Objects and scenes display lists</li>
              <li>Skeleton and bone information</li>
              <li>Custom SoH implementations</li>
              <li>Cross-reference between decomp and SoH</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>📋 Segment Calls Database</h3>
            <p>Essential segment call information for maintaining special effects when replacing models. Includes automated tools and manual instructions for proper implementation in your custom assets.</p>
            <ul>
              <li>Tutorial for beginners</li>
              <li>Object and scene segment calls</li>
              <li>Automated integration tools</li>
              <li>Special effects preservation</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>🎬 Animations Database</h3>
            <p>Complete character and object animation data for both decomp and Ship of Harkinian projects. Essential for character modding, custom animations, and understanding game mechanics.</p>
            <ul>
              <li>Character movement animations</li>
              <li>Object interaction sequences</li>
              <li>Cross-reference between decomp and SoH</li>
              <li>Animation timing and technical details</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>🔊 Sounds Database</h3>
            <p>Audio samples and effects database with technical specifications. Essential for custom sound implementation, audio replacement, and understanding the game's sound architecture.</p>
            <ul>
              <li>Audio file specifications</li>
              <li>Sample rates and formats</li>
              <li>Sound effect categorization</li>
              <li>Technical implementation details</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>🎵 Instruments Database</h3>
            <p>Musical instrument sets and sample information for custom soundtrack creation. Includes percussion maps and detailed technical specifications for each instrument.</p>
            <ul>
              <li>Instrument sample sets</li>
              <li>Percussion mapping data</li>
              <li>Audio format specifications</li>
              <li>Custom music integration guides</li>
            </ul>
          </div>
        </div>
        
        <div className="credits">
          <h3>📚 Credits & Resources</h3>
          <p>This database is made possible by the hard work of the Zelda modding community. Special thanks to Citrus, Dany, DanaTheElf, Laqueeshous, Malon Rose, Peyton, PurpleHato, wisefries, and more contributors who have documented and shared this technical information.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;