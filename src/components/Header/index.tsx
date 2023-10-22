import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

type HeaderProps = {
  handleCreateAssignment: () => void;
  datePicked: (date: Date) => void;
  selected: Date | null;
  showCalendar: boolean;
  setShowCalendar: (showCalendar: boolean) => void;
  input: string;
  setInput: (input: string) => void;
};

export function Header({
  handleCreateAssignment,
  datePicked,
  selected,
  showCalendar,
  setShowCalendar,
  input,
  setInput,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>

      <form className={styles.newAssignmentForm}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Add a new assignment"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {selected && (
            <div className={styles.dueDate}>
              <p>Due date: {format(selected, "dd/MM/yyyy")}</p>
            </div>
          )}
        </div>
        <div
          className={styles.calendarIcon}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          📅
        </div>
        <button disabled={!input} onClick={handleCreateAssignment}>
          <AiOutlinePlusCircle size={20} />
        </button>
        {showCalendar && (
          <div className={styles.calendarPopover}>
            <DayPicker
              mode="single"
              selected={selected || undefined}
              onSelect={(date) => datePicked(date as Date)}
              className={styles.calendar}
            />
          </div>
        )}
      </form>
    </header>
  );
}
