import React from "react";
import { TimelineProps } from "./Timeline.types";
import styles from "./Timeline.module.css";

const Timeline = ({ data }: TimelineProps): JSX.Element => {
  const handleClick = (item: any) => {
    alert(`Clicked on: ${item.name}`);
  };

  return (
    <div className={styles.timeline}>
      {data.map((item) => (
        <div key={item.id} className={styles.row}>
          <div
            className={styles.bar}
            style={{
              left: `${item.start}px`,
              width: `${item.end - item.start}px`,
              backgroundColor: item.color || "#007BFF",
            }}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
