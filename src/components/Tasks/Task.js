import React from 'react';
import './Task.css';
import Card from "../UI/Card";
import Due from "./Due";
import ListNumber from "./ListNumber";

function Task(props) {
    return (
        <li>
            <Card className="task">
                <ListNumber className="number" />
                <div className="wrapper">
                    <div className="details">
                        <Due date={props.due} />
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <div className="checkbox"><input type="checkbox" /></div>
            </Card>
        </li>
    );
}

export default Task;