import React from "react";

function Note(props) {
  return (
    <div className="notes">
      <div className="notes-body">
        <h3>{props.head}</h3>
        <p>{props.desc}</p>
        <hr className="hr-line" />
      </div>
    </div>
  );
}

export default Note;
