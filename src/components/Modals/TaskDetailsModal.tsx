import React from "react";
import { TaskDetailsModalProps } from "./TaskDetailsModal.types";
import styles from "./TaskDetailsModal.module.css";

const TaskDetailsModal = ({
  isOpen,
  onClose,
  task,
}: TaskDetailsModalProps): JSX.Element | null => {
  if (!isOpen || !task) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Task Details</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <p>
            <strong>Name:</strong> {task.name}
          </p>
          <p>
            <strong>Assigned To:</strong> {task.assignedTo}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <p>
            <strong>Start Date:</strong> {task.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {task.endDate}
          </p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
