import './Due.css';

function Due(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    return (
        <div className="task-due">
            <div>{month}</div>
            <div>{day}</div>
        </div>
    );
}

export default Due;