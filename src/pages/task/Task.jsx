import React, { useState } from "react";
import style from "./Task.module.css";

export default function Task() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputData = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex === -1) {
      setData([...data, input]);
    } else {
      const updatedData = [...data];
      updatedData[editIndex] = input;
      setData(updatedData);
      setEditIndex(-1);
    }
    setInput("");
  };

  const handleDelete = (ind) => {
    const filterData = data.filter((item, index) => index !== ind);
    setData(filterData);
  };

  const handleEdit = (ind) => {
    setEditIndex(ind);
    setInput(data[ind]);
  };

  return (
    <div className={style.container}>
      <h1>To-Do List</h1>
      <div className={style.todo}>
        <div>
          {data.map((item, ind) => (
            <div key={ind} className={style.todo_item}>
              {editIndex === ind ? (
                <input type="text" value={input} onChange={handleInputData} />
              ) : (
                <p>{item}</p>
              )}

              <div className={style.button}>
                {editIndex === ind ? (
                  <span onClick={handleSubmit}>Save</span>
                ) : (
                  <>
                    <span onClick={() => handleEdit(ind)}>Edit</span>
                    <span onClick={() => handleDelete(ind)}>Delete</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <input
          type="text"
          value={input}
          placeholder="add here..."
          onChange={handleInputData}
        />
        <button onClick={handleSubmit}>
          {editIndex === -1 ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
