export interface Task {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  assignedTo: string;
  status: string;
  dependencies?: Task[];
}

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  assignedTo: string;
  status: string;
  tasks: Task[];
}

export interface SidebarProps {
  projects: Project[];
}
