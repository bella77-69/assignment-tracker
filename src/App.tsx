import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [createAssignment, setCreateAssignment] = useState<JSX.Element[]>([]);
  const [selected, setSelected] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleCreateAssignments = () => {
    if (!input || !selected) {
      return;
    }
    const dueDate = selected;
    const currentDate = new Date();
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysUntilDue = Math.ceil(timeDifference / (1000 * 3600 * 24));

    const bubbleBackgroundColor = daysUntilDue === 1 ? "red" : "grey";
    const dueInDays =
      daysUntilDue > 1 ? `Due in ${daysUntilDue} days` : "Due tomorrow";

    const assignmentWithDate = (
      <>
        {input}
        <span
        className='bubbleBackground'
          style={{
            backgroundColor: bubbleBackgroundColor
          }}
        >
          {dueInDays}
        </span>
      </>
    );

    setCreateAssignment([...createAssignment, assignmentWithDate]);
    setInput("");
    setSelected(null);
  };
  const handleDeleteAssignment = (index: number) => {
    const updatedAssignment = [...createAssignment];
    updatedAssignment.splice(index, 1);
    setCreateAssignment(updatedAssignment);
  };

  const datePicked = (date: Date) => {
    setSelected(date);
    setShowCalendar(false);
  };

  return (
    <>
      <Header
        handleCreateAssignment={handleCreateAssignments}
        datePicked={datePicked}
        selected={selected}
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        input={input}
        setInput={setInput}
      />
      <Assignments
        createAssignment={createAssignment}
        onDeletedAssignment={handleDeleteAssignment}
      />
    </>
  );
}

export default App;
