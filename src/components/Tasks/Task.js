import React from 'react';
import './Task.css';
import Card from "../UI/Card";

function Task() {
    return (
        <div className="task">
            <div className="Number">1</div>
            <div className="Deadline">Due</div>
            <div className="Task">To Do</div>
            <input type="checkbox" />
        </div>
    );
}

export default Task;