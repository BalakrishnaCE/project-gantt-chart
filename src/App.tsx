import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Timeline from "./components/Timeline/Timeline";
import CalendarView from "./components/Calendar/CalendarView";
import TaskDetailsModal from "./components/Modals/TaskDetailsModal";
import useGanttData from "./hooks/useGanttData";
import useSidebarFilters from "./hooks/useSidebarFilters";
import "./styles/index.css";

const App = () => {
  // Sample projects data
  const initialProjects = [
    {
      id: "1",
      name: "Project 1",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
      assignedTo: "John Doe",
      status: "Completed",
      tasks: [
        {
          id: "1.1",
          name: "Task 1",
          startDate: "2023-01-01",
          endDate: "2023-01-05",
          assignedTo: "John Doe",
          status: "Completed",
          dependencies: [],
        },
        {
          id: "1.2",
          name: "Task 2",
          startDate: "2023-01-06",
          endDate: "2023-01-10",
          assignedTo: "Jane Smith",
          status: "In Progress",
          dependencies: [],
        },
      ],
    },
    {
      id: "2",
      name: "Project 2",
      startDate: "2023-02-01",
      endDate: "2023-02-28",
      assignedTo: "Jane Doe",
      status: "In Progress",
      tasks: [
        {
          id: "2.1",
          name: "Task 1",
          startDate: "2023-02-01",
          endDate: "2023-02-05",
          assignedTo: "Jane Doe",
          status: "Completed",
          dependencies: [],
        },
      ],
    },
  ];

  // State and hooks
  const { projects } = useGanttData(initialProjects);
  const { filter, setFilter, applyFilter } = useSidebarFilters();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  const handleDrag = (e: React.MouseEvent) => {
    setSidebarWidth(e.clientX);
  };

  // Filtered projects
  const filteredProjects = applyFilter(projects);

  // Event handlers
  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ flex: 1, borderRight: "1px solid #ddd" }}>
        <Sidebar projects={filteredProjects} />
        <div style={{ padding: "16px" }}>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter projects/tasks"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: sidebarWidth,
            width: "5px",
            cursor: "ew-resize",
            backgroundColor: "#ddd",
          }}
          onMouseDown={handleDrag}
        />

        {/* Main Content */}
        <div style={{ flex: 3, padding: "16px" }}>
          <h2>Calendar View</h2>
          <CalendarView
            data={projects.flatMap((project) => project.tasks)}
            startDate="2023-01-01"
            endDate="2023-03-31"
          />

          <h2>Timeline View</h2>
          <Timeline
            data={projects.flatMap((project) =>
              project.tasks.map((task) => ({
                id: task.id,
                name: task.name,
                start: new Date(task.startDate).getTime(),
                end: new Date(task.endDate).getTime(),
                color: "#007BFF",
              }))
            )}
          />
        </div>
      </div>

      {/* Task Details Modal */}
      <TaskDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />
    </div>
  );
};

export default App;
