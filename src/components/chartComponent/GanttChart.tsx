import React from 'react';
import SideBar from './SideBar'
import GanttBars from './GanttBars'
import Columns from './Columns';

const GanttChart: React.FC = () => {
  return (
  <div>
    <SideBar/>
    <GanttBars/>
    <Columns/>
  </div>
  )
};

export default GanttChart;