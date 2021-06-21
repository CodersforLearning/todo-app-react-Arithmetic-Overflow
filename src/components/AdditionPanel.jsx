import React, { useState } from 'react';

const AdditionPanel = ({ className, appendTask }) => {
	const [taskTitle, setTaskTitle] = useState('');

	const addTask = () => {
		appendTask(taskTitle);
		setTaskTitle('');
	}

	const addTaskOnEnter = event => {
		if (event.keyCode === 13) {
			addTask();
		}
	}

    return (
        <span>
        	<input
        		type='text'
        		placeholder='type here to add tasks'
        		onKeyDown={event => addTaskOnEnter(event)}
        		onChange={event => setTaskTitle(event.target.value)}
        		value={taskTitle}
        	/>

        	<button onClick={addTask}>
        		Add Task
        	</button>
        </span>
    );
};

export default AdditionPanel;
