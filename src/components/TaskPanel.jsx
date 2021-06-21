import React from 'react';

import TaskList from './TaskList';

const TaskPanel = ({ className }) => {
	const testTasks = ['task 1', 'task 2', 'task 3'];
    return (
        <TaskList taskList={testTasks}/>
    );
};

export default TaskPanel;
