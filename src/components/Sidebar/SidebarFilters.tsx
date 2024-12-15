import React from "react";

interface SidebarFiltersProps {
  filter: string;
  setFilter: (value: string) => void;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <div style={{ marginBottom: "16px" }}>
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
  );
};

export default SidebarFilters;
