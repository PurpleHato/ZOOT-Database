import React from 'react';
import './SegmentCallsTutorial.scss';

export const SegmentCallsTutorial: React.FC = () => {
  return (
    <div className="segment-calls-tutorial">
      <div className="tutorial-card">
        <div className="tutorial-text">
        <h3>📋 Segment Calls Tutorial</h3>
        
        <p>
          Segment calls are essential for maintaining special effects when replacing models in Zelda: Ocarina of Time. 
          When you export models using the Fast64 plugin, these crucial segment settings are lost and must be restored 
          to prevent broken visual effects in your custom models.
        </p>
        
        <div className="important-note">
          <strong>Important:</strong> Your new model's material structure must match the original. Always reference the imported 
          original model to ensure proper compatibility. Mismatched structures will result in broken models.
        </div>
        
        <h4>Manual Method</h4>
        
        <div className="instruction-step">
          <strong>Step 1:</strong> Open each exported material file and locate the end of the display list.
        </div>
        
        <div className="instruction-step">
          <strong>Step 2:</strong> Find this closing tag at the end of the material:
        </div>
        
        <pre><code dangerouslySetInnerHTML={{
          __html: `<span class="xml-tag">&lt;</span><span class="xml-element">EndDisplayList</span><span class="xml-tag">/&gt;</span>`
        }}></code></pre>
        
        <div className="instruction-step">
          <strong>Step 3:</strong> Insert the segment call immediately before the EndDisplayList tag:
        </div>
        
        <pre><code dangerouslySetInnerHTML={{
          __html: `<span class="xml-tag">&lt;</span><span class="xml-element">CallDisplayList</span> <span class="xml-attribute">Path</span><span class="xml-tag">=</span><span class="xml-string">"&gt;0xZZ000000"</span><span class="xml-tag">/&gt;</span>`
        }}></code></pre>
        
        <div className="important-note">
          The specific segment value (0xZZ000000) varies by model. Use the Objects and Scenes tabs in this database 
          to find the correct segment call for your specific model.
        </div>
        
        <div className="step-separator">• • •</div>
        
        <h4>Automated Method</h4>
        
        <p>
          For faster processing, use the automated terminal program available for Windows and Linux:{' '}
          <a 
            href="https://drive.google.com/drive/folders/1ho-0EbIEAO4CInZcMsVCfzQEJYvYKuSY" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download Segment Integrator Tools
          </a>
        </p>
        
        <p><strong>Windows Usage:</strong></p>
        <div className="instruction-step">
          Drag and drop your Objects folder directly onto the executable file.
        </div>
        
        <p><strong>Linux Usage:</strong></p>
        <div className="instruction-step">
          Set the file as executable, then run from the tool's directory:
        </div>
        
        <pre><code>./Segment_Integrator_Linux "path/to/exported/objects/"</code></pre>
        
        <em>
          <strong>Tool Limitations:</strong> Currently only supports Objects (not Scenes). Models with multiple segment values 
          must be handled manually - the tool will display an error and prompt you to use the manual method above.
        </em>
        </div>
      </div>
    </div>
  );
};

export default SegmentCallsTutorial;