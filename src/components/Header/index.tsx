import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header() {
  const [input, setInput] = useState<string>("");

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input 
        placeholder="Add a new assignment" 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input}>
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
