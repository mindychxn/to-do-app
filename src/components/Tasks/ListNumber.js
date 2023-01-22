import { useContext } from 'react';
import './ListNumber.css';
import { ToDoContext } from '../../contexts/ToDoContext';

function ListNumber(props) {

    const toDoContext = useContext(ToDoContext);

    return (
        <div className="number">
            {toDoContext.listNumber + 1}
        </div>
    )
}

export default ListNumber;