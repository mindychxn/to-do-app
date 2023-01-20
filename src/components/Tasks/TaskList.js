import React from 'react';
import './TaskList.css';
import Card from '../UI/Card';
import Task from './Task';

function TaskList (props) {
    return (
        <Card className="task-container">
            <ul className="task-list">
                {/*map each item in array to create a new task component*/}
                {props.items.map ((tasks) => (
                    <Task 
                    title={tasks.title}
                    due={tasks.due}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default TaskList;
