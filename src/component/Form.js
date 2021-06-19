import React from "react";


const Form = ({setInputText, inputText, todos, setToDos}) => {
    const inputTHandler = (text) => {
        console.log(text.target.value);
        setInputText(text.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setToDos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
        setInputText ("");
    };
    
    return (
        <form>
            <input value = {inputText} onChange = {inputTHandler} type = "text" className="todo-input"/>
     
            <button onClick = {submitHandler} className = "button" type = "submit" data-testid="new-item-button">
                <i className = "fas fa-plus-square"></i>
                </button>
            <div className = "select">
                <select name = "todo" className = "filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>

                </select>
            </div>


        </form>

    );
};

export default Form;