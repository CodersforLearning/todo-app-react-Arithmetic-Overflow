import React, { useState } from 'react';

import TaskList from './TaskList';
import AdditionPanel from './AdditionPanel';

const TaskPanel = ({ className }) => {
  const [taskList, setTaskList] =
    useState([]);

  const appendTask = newTask => setTaskList([...taskList, newTask]);

  const deleteTaskIndex = i => 
    setTaskList(
      [
        ...taskList.slice(0, i),
        ...taskList.slice(i+1)
      ]
    );

  return (
    <>
      <TaskList taskList={taskList} deleteTaskIndex={deleteTaskIndex} />
      <AdditionPanel appendTask={appendTask} />
    </>
  );
};

export default TaskPanel;
