import React from "react";
import { CalendarViewProps } from "./CalendarView.types";
import styles from "./CalendarView.module.css";

const CalendarView = ({
  data,
  startDate,
  endDate,
}: CalendarViewProps): JSX.Element => {
  const days: Date[] = [];
  const currentDate = new Date(startDate);

  // Generate an array of all dates between startDate and endDate
  while (currentDate <= new Date(endDate)) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div className={styles.calendar}>
      {/* Render calendar header */}
      <div className={styles.header}>
        {days.map((day, index) => (
          <div key={index} className={styles.headerCell}>
            {day.toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
            })}
          </div>
        ))}
      </div>

      {/* Render calendar rows for tasks */}
      <div className={styles.rows}>
        {data.map((item) => (
          <div key={item.id} className={styles.row}>
            {days.map((day, index) => {
              const itemStartDate = new Date(item.startDate);
              const itemEndDate = new Date(item.endDate);
              const isWithinRange = day >= itemStartDate && day <= itemEndDate;

              return (
                <div
                  key={index}
                  className={`${styles.cell} ${
                    isWithinRange ? styles.activeCell : ""
                  }`}
                  style={{
                    backgroundColor: isWithinRange ? item.color : undefined,
                  }}
                >
                  {isWithinRange ? item.name : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CalendarView;
