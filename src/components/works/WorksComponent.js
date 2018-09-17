import React from 'react';
import WorkCardComponent from './WorksCardComponent';

const WorksComponent = () => (
  <section className="works">
    <div className="works__row">
      <WorkCardComponent />
      <WorkCardComponent />
    </div>
  </section>
);

WorksComponent.displayName = 'WorksComponent';
export default WorksComponent;
