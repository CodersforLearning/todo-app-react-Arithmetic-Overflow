import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({ className, taskList }) => {
  const [tasks, setTasks] = useState(taskList);

  useEffect(
    () => {setTasks(taskList)},
    [taskList]
  );

  return (
    <div>
      <h1>
        Tasks Remaining:
      </h1>
      
      <ul>
        {
          tasks.map(
            (taskTitle, i) =>
              <li key={i + taskTitle}>
                <Task taskTitle={taskTitle} />
              </li>
          )
        }
      </ul>
    </div>
  );
};

export default TaskList;
