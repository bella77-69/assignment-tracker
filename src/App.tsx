import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [createAssignment, setCreateAssignment] = useState<string[]>([]);

  const handleCreateAssignments = (assignment: string) => {
    setCreateAssignment([...createAssignment, assignment]);
  };

  const handleDeleteAssignment = (index: number) => {
    const updateAssignment = [...createAssignment];
    updateAssignment.splice(index, 1);
    setCreateAssignment(updateAssignment);
  };

  return (
    <>
      <Header handleAssignment={handleCreateAssignments} />
      <Assignments
        createAssignment={createAssignment}
        onDeletedAssignment={handleDeleteAssignment}
      />
    </>
  );
}

export default App;
