import React, { useState } from "react";
import SidebarFilters from "./SidebarFilters";
import { SidebarProps, Project } from "./Sidebar.types";
import styles from "./Sidebar.module.css";

const Sidebar = ({ projects }: SidebarProps): JSX.Element => {
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Project | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn] as string;
    const bValue = b[sortColumn] as string;
    if (sortOrder === "asc") return aValue.localeCompare(bValue);
    return bValue.localeCompare(aValue);
  });

  return (
    <div className={styles.sidebar}>
      <SidebarFilters filter={filter} setFilter={setFilter} />
      <div className={styles.sortControls}>
        <button onClick={() => setSortColumn("name")}>Sort by Name</button>
        <button onClick={() => setSortColumn("status")}>Sort by Status</button>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Toggle Order
        </button>
      </div>
      <ul className={styles.projectList}>
        {sortedProjects.map((project) => (
          <li key={project.id} className={styles.project}>
            <div className={styles.projectHeader}>
              <span>{project.name}</span>
              <span>{project.status}</span>
            </div>
            <ul className={styles.taskList}>
              {project.tasks.map((task) => (
                <li key={task.id} className={styles.task}>
                  <div>{task.name}</div>
                  <div>{task.status}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
