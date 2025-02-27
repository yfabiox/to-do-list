import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {

    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("text", task.text);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md cursor-pointer ${task.isCompleted && "line-through"}`}>{task.text} </button>
                    <button onClick={() => onSeeDetailsClick(task)}  className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"> <ChevronRightIcon /> </button>
                    <button onClick={() => props.onDeletetaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"> <TrashIcon /> </button>
                </li>
           ))
            }
        </ul >
    );

}

export default Tasks;   