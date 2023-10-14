import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [createAssignment, setCreateAssignment] = useState<string[]>([])

  const handleCreateAssignments = (assignment: string) => {
    setCreateAssignment([...createAssignment, assignment]);
  }

  return (
    <>
      <Header handleAssignment={handleCreateAssignments} />
      <Assignments createAssignment={createAssignment} />
    </>
  );
}

export default App;
