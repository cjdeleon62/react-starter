import React from 'react';

const WorkCardComponent = () => (
  <div className="work-card">
    <div className="work-card__image-container">
      <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed86b965826826e3dd08bb3b33726543&auto=format&fit=crop&w=1414&q=80" alt="Project" />
    </div>
    <div>
      This will be the description
    </div>
  </div>
);

WorkCardComponent.displayName = 'WorkCardComponent';
export default WorkCardComponent;
