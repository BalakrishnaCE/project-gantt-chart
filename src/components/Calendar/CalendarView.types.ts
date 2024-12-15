export interface CalendarItem {
  id: string; // Unique identifier
  name: string; // Name of the task/project
  startDate: string; // Start date in ISO format
  endDate: string; // End date in ISO format
  color?: string; // Optional custom color
}

export interface CalendarViewProps {
  data: CalendarItem[]; // Array of calendar items
  startDate: string; // Start date for the calendar (e.g., "2023-01-01")
  endDate: string; // End date for the calendar (e.g., "2023-01-31")
}
