import React, { useState } from 'react';
import './EnterTask.css';
import Card from '../UI/Card';
import DateTimePicker from 'react-datetime-picker';


function EnterTask () {
    return (
        <Card className="taskbox">
            <form>
                <DateTimePicker></DateTimePicker>
                <input className="taskform" type="text" placeholder="Add a Task" onChange=""></input>
            </form>
        </Card>
        
    )
}

export default EnterTask;