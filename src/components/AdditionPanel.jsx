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

	const style = {
		'fontSize': '28pt',
		'marginTop': '0'
	}

    return (
        <span>
        	<input
        		type='text'
        		placeholder='Type Here To Add Tasks'
        		onKeyDown={event => addTaskOnEnter(event)}
        		onChange={event => setTaskTitle(event.target.value)}
        		value={taskTitle}
        		style={style}
        	/>

        	<button onClick={addTask} style={style}>
        		Add Task
        	</button>
        </span>
    );
};

export default AdditionPanel;
