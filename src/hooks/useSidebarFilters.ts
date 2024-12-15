import { useState } from "react";
import { Project } from "../components/Sidebar/Sidebar.types";

const useSidebarFilters = () => {
  const [filter, setFilter] = useState<string>("");

  // Filter projects and tasks
  const applyFilter = (projects: Project[]) => {
    if (!filter) return projects;

    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(filter.toLowerCase()) ||
        project.tasks.some((task) =>
          task.name.toLowerCase().includes(filter.toLowerCase())
        )
    );
  };

  return {
    filter,
    setFilter,
    applyFilter,
  };
};

export default useSidebarFilters;
