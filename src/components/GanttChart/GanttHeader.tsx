// src/components/GanttChart/GanttHeader.tsx
import React from 'react';

const GanttHeader: React.FC = () => {
  return (
    <div className="gantt-header">
      {/* Render timeline headers (date/labels) */}
      <div className="gantt-header-item">Date/Month</div>
      {/* Add more items depending on zoom level */}
    </div>
  );
};

export default GanttHeader;
