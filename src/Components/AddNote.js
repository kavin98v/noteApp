import React, { useState } from "react";

const AddNote = (props) => {
  const [note, setNote] = useState("");

  return (
    <div className="flex flex-col">
      <label>Enter Note</label>
      <input
        type="text"
        className="border border-slate-800"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={() => {
          props.addnote(note);
          setNote("");
        }}
      >
        submit
      </button>
    </div>
  );
};

export default AddNote;
