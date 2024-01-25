import { useState } from "react";
import "./App.css";
import AddNote from "./Components/AddNote";

function App() {
  const [noteList, setNoteList] = useState([
    "Do Honework",
    "go to gym",
    "hav lunch",
  ]);

  console.log(noteList);

  function stringHandle(text) {
    const newNoteList = [text, ...noteList];

    setNoteList(newNoteList);
  }

  function handleDelete(indexToDelete){
    // Create a new array without the item at the specified index
    const updatedNoteList = noteList.filter((_, index) => index !== indexToDelete);
    setNoteList(updatedNoteList);
  }

  

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 gap-2 flex flex-col">
        {noteList.map((item, index) => (
          <div className="border border-gray-900 flex justify-between" key={item}>
            <p>{item}</p>
            <button onClick={()=>handleDelete(index) }>
              <svg
                class="w-6 h-6 text-red-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 18 6m0 12L6 6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div>
        <AddNote addnote={stringHandle} />
      </div>
    </div>
  );
}

export default App;
