import { useState } from "react";
import "./App.css";
import AddNote from "./Components/AddNote";
import NavBar from "./Components/NavBar";

function App() {
  const [noteList, setNoteList] = useState([
    { note: "Do Honework", user: "Kavindu" },
    { note: "go to gym", user: "holin" },
    { note: "hav lunch", user: "Kavindu" },
  ]);

  function stringHandle(obj) {
    const newNoteList = [obj, ...noteList];

    setNoteList(newNoteList);
  }

  function handleDelete(indexToDelete) {
    // Create a new array without the item at the specified index
    const updatedNoteList = noteList.filter(
      (_, index) => index !== indexToDelete
    );
    setNoteList(updatedNoteList);
  }

  return (
    <div className="bg-slate-900 h-screen">
      <NavBar />
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-2 gap-2 flex flex-col">
          {noteList.map((item, index) => (
            <div
              className="border border-gray-900 flex flex-col bg-slate-500 p-2"
              key={index}
            >
              <div className=" flex justify-between">
                <p className="text text-sm text">{item.user}</p>
                <button onClick={() => handleDelete(index)}>
                  <svg
                    className="w-6 h-6 text-red-400 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 18 6m0 12L6 6"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-lg truncate">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        <AddNote addnote={stringHandle} />
      </div>
    </div>
  );
}

export default App;
