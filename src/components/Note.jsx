import React from "react";

function Note(props) {
  return (
    <div className="notes">
      <div className="notes-body">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <hr className="hr-line" />
        <div className="center">
          <button
            className="delete"
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
