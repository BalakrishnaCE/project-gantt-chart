export interface TimelineItem {
  id: string; // Unique identifier
  name: string; // Name of the task/project
  start: number; // Start position (in pixels or units)
  end: number; // End position (in pixels or units)
  color?: string; // Optional custom color for the bar
}

export interface TimelineProps {
  data: TimelineItem[]; // Array of timeline items
}
