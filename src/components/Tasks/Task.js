import React from 'react';
import './Task.css';
import Card from "../UI/Card";
import Due from "./Due";

function Task(props) {
    return (
        <li>
            <Card className="task">
                <div className="number">{}</div>
                <div className="details">
                <Due date={props.due} />
                <h2>{props.title}</h2>
                </div>
                <div className="checkbox"><input type="checkbox" /></div>
            </Card>
        </li>
    );
}

export default Task;