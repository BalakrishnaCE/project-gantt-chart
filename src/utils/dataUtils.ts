import { Project, Task } from "../components/Sidebar/Sidebar.types";
import { getDateDifference } from "./dateUtils";
/**
 * Flattens a hierarchical project and task structure into a flat array.
 * @param projects - Array of projects with tasks.
 * @returns Flat array of tasks.
 */
export const flattenProjects = (projects: Project[]): Task[] => {
  const tasks: Task[] = [];

  const extractTasks = (project: Project) => {
    tasks.push(...project.tasks);
    project.tasks.forEach((task) => {
      if (task.dependencies) {
        tasks.push(...task.dependencies);
      }
    });
  };

  projects.forEach(extractTasks);

  return tasks;
};

/**
 * Filters projects and tasks by a search term.
 * @param projects - Array of projects.
 * @param searchTerm - The term to filter by.
 * @returns Filtered array of projects.
 */
export const filterProjects = (
  projects: Project[],
  searchTerm: string
): Project[] => {
  if (!searchTerm) return projects;

  const lowerTerm = searchTerm.toLowerCase();

  return projects.filter((project) => {
    const matchesProject =
      project.name.toLowerCase().includes(lowerTerm) ||
      project.assignedTo.toLowerCase().includes(lowerTerm);

    const matchesTasks = project.tasks.some(
      (task) =>
        task.name.toLowerCase().includes(lowerTerm) ||
        task.assignedTo.toLowerCase().includes(lowerTerm)
    );

    return matchesProject || matchesTasks;
  });
};

/**
 * Calculates the total duration of a project in days.
 * @param project - The project to calculate the duration for.
 * @returns Total number of days for the project.
 */
export const calculateProjectDuration = (project: Project): number => {
  return getDateDifference(project.startDate, project.endDate);
};
