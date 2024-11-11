// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; 
import GanttChart from './components/GanttChart/GanttChart';

ReactDOM.render(
  <React.StrictMode>
    <GanttChart />
  </React.StrictMode>,
  document.getElementById('root')
);
