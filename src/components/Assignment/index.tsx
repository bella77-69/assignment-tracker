import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface AssignmentProps {
  title: string;
  onDeletedAssignment: () => void;
}

export function Assignment({ title , onDeletedAssignment }: AssignmentProps) {



  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button 
      className={styles.deleteButton}
      onClick={onDeletedAssignment}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
