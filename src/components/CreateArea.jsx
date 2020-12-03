import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setList((prevItem) => {
      return [input, ...prevItem];
    });
  }
  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.heading}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={input.desc}
        />
        <button onClick={handleClick}>+</button>
      </form>
      <div>
        {list.map((list, index) => {
          return (
            <Note
              title={list.title}
              content={list.content}
              key={index}
              id={index}
              onDelete={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CreateArea;
