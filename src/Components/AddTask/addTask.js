import React from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import './addTask.css';
import { useState } from 'react';
import { insertValue } from '../../services/localStorageService';

// Component responsável por cuidador do modal para a adição de novas tasks.
function AddTask({ date, isVisible, onClose }) {
    const [taskValue, setTaskValue] = useState("");
    const [hourValue, setHourValue] = useState("");

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'gray',
            width: 200
        },
    };

    return (
        <Modal
            style={customStyles}
            isOpen={isVisible}>
            <div className="modal-container">
                <button onClick={() => onClose()}><FontAwesomeIcon icon={faClose} /></button>
                <div className="inputs-container">
                    <input onChange={(event) => setTaskValue(event.target.value)} placeholder="Insira uma atividade."></input>
                    <input onChange={(event) => setHourValue(event.target.value)} placeholder="Insira um horário."></input>
                </div>
                <button onClick={() => { insertValue(date, taskValue, hourValue);  onClose();}}><FontAwesomeIcon icon={faSave} /></button>
            </div>
        </Modal>
    );
}

export default AddTask;