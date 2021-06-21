import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({ className, taskList, deleteTaskIndex }) => {
  const [tasks, setTasks] = useState(taskList);
  const [strikethrough, setStrikethrough] = useState(taskList.map(_ => false));

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
              <li key={i + taskTitle} onClick={() => deleteTaskIndex(i)}>
                <Task taskTitle={taskTitle} />
              </li>
          )
        }
      </ul>
    </div>
  );
};

export default TaskList;
