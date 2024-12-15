export interface Task {
  id: string; // Unique identifier
  name: string; // Name of the task
  assignedTo: string; // Assigned person
  status: string; // Status of the task (e.g., "Completed", "In Progress")
  startDate: string; // Start date in ISO format
  endDate: string; // End date in ISO format
}

export interface TaskDetailsModalProps {
  isOpen: boolean; // Whether the modal is open
  onClose: () => void; // Function to close the modal
  task: Task | null; // Task details to display
}
