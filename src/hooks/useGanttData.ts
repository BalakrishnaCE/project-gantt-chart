import { useState } from "react";
import { Project } from "../components/Sidebar/Sidebar.types";

const useGanttData = (initialData: Project[] = []) => {
  const [projects, setProjects] = useState<Project[]>(initialData);

  // Add a new project
  const addProject = (newProject: Project) => {
    setProjects((prev) => [...prev, newProject]);
  };

  // Update an existing project or task
  const updateProjectOrTask = (updatedProject: Project) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  // Delete a project or task
  const deleteProjectOrTask = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return {
    projects,
    addProject,
    updateProjectOrTask,
    deleteProjectOrTask,
  };
};

export default useGanttData;
