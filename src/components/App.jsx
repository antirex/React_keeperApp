import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notesFull";

function App() {
  return (
    <div>
      <Header />
      <div className = "property">
        {notes.map(function (note) {
            return <Note key={note.key} head={note.title} desc={note.content} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
