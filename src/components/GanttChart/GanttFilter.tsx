// src/components/GanttChart/GanttFilter.tsx
import React, { useState } from 'react';

const GanttFilter: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="gantt-filter">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      {/* Add more filters like project, assigned to, etc. */}
    </div>
  );
};

export default GanttFilter;
