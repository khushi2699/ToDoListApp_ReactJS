import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState(""); // State - inputList
  const [Items, setItems] = useState([]); //State

  const itemEvent = (event) => {
    setInputList(event.target.value); //Hook, it sets the state, setInputList inserts the event value to the state
  };

  const itemsList = () => {
    {
      inputList &&
        setItems((oldItems) => {
          return [...oldItems, inputList];
        });
    }
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const validate = (event) => {
    if (inputList) {
      itemsList();
    } else {
      alert("No input");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do List </h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          />
          {/* onChange calls itemEvent everytime */}
          <button value={inputList} onClick={validate}>
            {" "}
            +{" "}
          </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items &&
              Items.map((itemvalue, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    text={itemvalue}
                    onSelect={deleteItems}
                  />
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
