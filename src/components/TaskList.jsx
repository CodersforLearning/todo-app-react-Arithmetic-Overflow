import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({ className, taskList, setTaskList }) => {
  const [tasks, setTasks] = useState(taskList);

  useEffect(
    () => {setTasks(taskList)},
    [taskList]
  );

  return (
    <ul>
      {
        tasks.map(
          (taskTitle, i) =>
            <li key={i + taskTitle}>
              <Task taskTitle={taskTitle} />
            </li>
        )
      }

      <li key='second addition button'>
        <button onClick={
          () => setTaskList([...taskList, 'second test addition'])
        }
        >
          Add here too
        </button>
      </li>
    </ul>
  );
};

export default TaskList;
