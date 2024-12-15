import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure App is correctly exported from App.tsx
import "./styles/index.css"; // Include global styles if necessary

// Create a root element and render the app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// export { default as Sidebar } from "./components/Sidebar/Sidebar";
// export { default as Timeline } from "./components/Timeline/Timeline";
// export { default as CalendarView } from "./components/Calendar/CalendarView";
// export { default as TaskDetailsModal } from "./components/Modals/TaskDetailsModal";
