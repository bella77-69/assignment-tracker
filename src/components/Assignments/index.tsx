import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProps = {
  createAssignment: string[];
  onDeletedAssignment: (index: number) => void;
}

export function Assignments({
  createAssignment,
  onDeletedAssignment,
}: AssignmentsProps) {
  const [checked, setChecked] = useState(createAssignment.map(() => false));

  const handleChecked = (index: number) => {
    const newCompletedAssignments = [...checked];
    newCompletedAssignments[index] = !checked[index];
    setChecked(newCompletedAssignments);
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createAssignment.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {checked.filter((check) => check).length} of{" "}
            {createAssignment.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {createAssignment.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment}
            onDeletedAssignment={() => onDeletedAssignment(index)}
            isCompleted={checked[index]}
            handleChecked={() => handleChecked(index)}
          />
        ))}
      </div>
    </section>
  );
}
