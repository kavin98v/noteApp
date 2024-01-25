import React, { useState } from "react";

const AddNote = (props) => {
  const [note, setNote] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="flex flex-col bg-slate-400 h-max p-4">
      <label>Enter Note</label>
      <input
        type="text"
        className="border border-slate-800"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <label>Enter User</label>
      <input
        type="text"
        className="border border-slate-800"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        onClick={() => {
          props.addnote({user,note});
          setNote("");
          setUser("");
        }}
      >
        submit
      </button>
    </div>
  );
};

export default AddNote;
