// src/components/GanttChart/GanttSidebar.tsx
import React from 'react';

const GanttSidebar: React.FC = () => {
  return (
    <div className="gantt-sidebar">
      {/* Render task/project details */}
      <div>Project Name</div>
      <div>Assigned To</div>
      <div>Start Date</div>
      <div>End Date</div>
    </div>
  );
};

export default GanttSidebar;
