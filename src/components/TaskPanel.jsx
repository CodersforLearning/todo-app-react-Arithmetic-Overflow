import React, { useState } from 'react';

import TaskList from './TaskList';

const TaskPanel = ({ className }) => {
  const [testTasks, setTestTasks] =
    useState(['task 1', 'task 2', 'task 3']);

  return (
    <>
      <TaskList taskList={testTasks} setTaskList={setTestTasks} />
      <button
        onClick={
          () =>
            setTestTasks(
              [...testTasks, 'test addition'])
        }
      >
        test add task
      </button>
    </>
  );
};

export default TaskPanel;
