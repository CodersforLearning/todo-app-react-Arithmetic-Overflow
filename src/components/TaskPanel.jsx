import React, { useState } from 'react';

import TaskList from './TaskList';
import AdditionPanel from './AdditionPanel';

const TaskPanel = ({ className }) => {
  const [taskList, setTaskList] =
    useState([]);

  const appendTask = newTask => setTaskList([...taskList, newTask]);

  return (
    <>
      <TaskList taskList={taskList} />
      <AdditionPanel appendTask={appendTask} />
    </>
  );
};

export default TaskPanel;
