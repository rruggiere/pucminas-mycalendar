import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import TaskList from "../TaskList/taskList";
import './Main.css';
import { getLocalTasks } from '../../services/localStorageService';

// Component pai com todo o conteúdo que deve ser renderezido em tela
function Main() {
    const [daySelected, onChange] = useState(new Date());
    const tasks = getLocalTasks(daySelected);
    const [stateTasks, setTask] = useState({ tasks });
    return (
        <div className="main-container">
            <div className="agenda-container">
                <text>BEM-VINDO A SUA AGENDA</text>
                <div className='calendar-container'>
                    <Calendar onChange={(date)=> {
                        onChange(date);                         
                        const tasks = getLocalTasks(date);                  
                        setTask({tasks}) 
                        }} />
                </div>
            </div>
            <TaskList stateTasks={stateTasks} stateAction={(tasks) => setTask(tasks)} date={daySelected} />                
        </div>
    );
}

export default Main;