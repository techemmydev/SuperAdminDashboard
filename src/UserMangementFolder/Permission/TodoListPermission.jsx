import React, { useState } from "react";
import SearchInput from "../../SuperAdminComponent/SearchInput/SearchInput";
import style from "../Permission/Todolist.module.css";
import plus from "/AttendanceEshImage/Avataraddbutton.svg";
import showimage from "/ViewProfileimage/opeimage.png";
import { LiaTimesSolid } from "react-icons/lia";
const TodoListPermission = ({ title }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTask = {
        text: newTodo.trim(),
        imageUrl: showimage, // or use a different image URL as needed
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, id) => id !== index);
    setTodos(newTodos);
  };

  return (
    <div className={style.todo_container}>
      <div className={`${style.flex_mobie}`}>
        <h1>{title}</h1>
        <div
          className={`${style.buttonflexplus} ${style.show_mobieAdd}`}
          onClick={handleAddTodo}
        >
          <div>
            <img src={plus} alt="" />
          </div>
          <button>Add</button>
        </div>
      </div>

      <div className={`${style.inputflex}`}>
        <SearchInput
          placeholder={
            "Search esxisting teams or staff and press ENTER to add them"
          }
          type={"text"}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />{" "}
        <div
          className={`${style.buttonflexplus} ${style.hide_mobileAdd}`}
          onClick={handleAddTodo}
        >
          <div>
            <img src={plus} alt="" />
          </div>
          <button>Add</button>
        </div>
      </div>
      <div className={`${style.showtodolist}`}>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <img
                src={todo.imageUrl}
                alt=""
                style={{ width: "20px", marginRight: "10px" }}
              />
              {todo.text}
              <button onClick={() => handleDeleteTodo(index)}>
                <LiaTimesSolid />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListPermission;
