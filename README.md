# Project Gantt Chart

A highly customizable Gantt Chart library for React built with TypeScript.

## Features

- Project and task hierarchy
- Sidebar with filter options
- Calendar and timeline views
- Customizable colors and interactivity
- Draggable column dividers

## Installation

```bash
npm install project-gantt-chart
```

requirements are below.

1. this gantt chart should be super customizable for the user.
2. this gantt chart should have project & tasks under each project.
3. this gantt chart should have a sidebar for the projects, where each column should be like this
   a. project name
   b. start date
   c. end date
   d. assigned to
   e. status
   each column should have filter options
4. the structure of side bar should should be like below
   Name | Assigned To | Start Date | End Date | Status
   project 1 | John Doe | 2023-01-01 | 2023-01-31 | Completed
   --task 1 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --dependency 1 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --dependency 2 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --task 2 | John Doe | 2023-01-06 | 2023-01-10 | Completed
   --task 3 | John Doe | 2023-01-11 | 2023-01-15 | Completed
   project 2 | John Doe | 2023-01-01 | 2023-01-31 | Completed
   --task 1 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --dependency 1 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --dependency 2 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --task 2 | John Doe | 2023-01-06 | 2023-01-10 | Completed
   --dependency 1 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   --dependency 2 | John Doe | 2023-01-01 | 2023-01-05 | Completed
   task 3 | John Doe | 2023-01-11 | 2023-01-15 | Completed
5. right side of the sidebar should have calender view., with the bar for each task.
6. below calender view, there should be a timeline view, with the bar for each task.
7. bars for project, task, dependency should be clickable, should have custom color option for user & should open a modal with the details of the task
8. there should be a filter option for the tasks, where user can filter the tasks by name, assigned to, start date, end date, status
9. there should be a filter option for the projects, where user can filter the projects by name, assigned to, start date, end date, status
10. the column divider between the sidebar and the timeline should be draggable.
