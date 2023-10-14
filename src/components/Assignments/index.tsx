import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  createAssignment: string[];
  onDeletedAssignment: (index: number) => void;
}


export function Assignments({createAssignment, onDeletedAssignment }: AssignmentsProps)  {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createAssignment.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>0 of {createAssignment.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {createAssignment.map((assignment, index) => (
          <Assignment 
          key={index} 
          title={assignment} 
          onDeletedAssignment={() => onDeletedAssignment(index)}
          />
        ))}
      
      </div>
    </section>
  );
}
