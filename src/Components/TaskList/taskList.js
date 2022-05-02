import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './taskList.css';
import AddTask from "../AddTask/addTask";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { getLocalTasks, updateValues } from '../../services/localStorageService';
import { useState } from 'react';

// Component que renderiza as tasks registradas para uma data selecionada pelo usuário
function TaskList({ date, stateTasks, stateAction }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const dataFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    const removeTask = (task) => {
        const taskFiltered = stateTasks.tasks.filter(taskItem => taskItem.taskValue != task.taskValue);
        updateValues(date, taskFiltered);
        stateAction({ tasks: taskFiltered });
    }

    const constructTasks = () => {
        const tasksElements = [];
        if (stateTasks.tasks && stateTasks.tasks.length > 0)
            stateTasks.tasks.forEach(task => {
                tasksElements.push(
                    <div className='task-container'>
                        <FontAwesomeIcon fontSize={13} icon={faCircleArrowRight} />
                        <text>
                            {task.taskValue}
                        </text>
                        <text>
                            | {task.hourValue}
                        </text>
                        <button onClick={() => { removeTask(task) }}>
                            <FontAwesomeIcon fontSize={13} color={'red'} icon={faTrash} />
                        </button>
                    </div>
                )
            });
        else
            tasksElements.push(<div>Nehuma atividade planejada para hoje!</div>)

        return tasksElements;
    }

    return (
        <div>
            <div className='tasks-container'>
                <text>Atividades para {dataFormatada} </text>
                {constructTasks()}
            </div>
            <div className='menu-container'>
                <button onClick={() => setIsOpen(true)}>
                    <FontAwesomeIcon icon={faPlusCircle} color={'green'} fontSize={25} />
                </button>
            </div>
            <AddTask date={date} isVisible={modalIsOpen} onClose={() => {
                setIsOpen(false);
                const newTasks = getLocalTasks(date);
                stateAction({ tasks: newTasks });
            }} />
        </div>

    );
}

export default TaskList;