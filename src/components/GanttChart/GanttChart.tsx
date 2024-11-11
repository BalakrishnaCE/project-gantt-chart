// src/components/GanttChart/GanttChart.tsx
import React from 'react';
import GanttHeader from './GanttHeader';
import GanttBody from './GanttBody';
import GanttSidebar from './GanttSidebar';
import GanttFilter from './GanttFilter';

const GanttChart: React.FC = () => {
  return (
    <div className="gantt-chart">
      <GanttSidebar />
      <div className="gantt-chart-main">
        <GanttHeader />
        <GanttBody />
      </div>
      <GanttFilter />
    </div>
  );
};

export default GanttChart;
