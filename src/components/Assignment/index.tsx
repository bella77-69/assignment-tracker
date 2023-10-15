import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type AssignmentProps = {
  title: string;
  onDeletedAssignment: () => void;
  isCompleted: boolean;
  handleChecked: () => void;
}

export function Assignment({
  title,
  onDeletedAssignment,
  isCompleted,
  handleChecked,
}: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleChecked}>
        {isCompleted ? <IoIosCheckmarkCircleOutline size={20} /> : <div />}
     
      </button>
      <p className={isCompleted ? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton} onClick={onDeletedAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
