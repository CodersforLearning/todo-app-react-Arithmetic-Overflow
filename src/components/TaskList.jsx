import React from 'react';

import Task from './Task';

const TaskList = ({ className, taskList }) => {
  return (
    <ul>
      {
        taskList.map(
          (taskTitle, i) =>
            <li key={i + taskTitle}>
              <Task taskTitle={taskTitle} />
            </li>
        )
      }
    </ul>
  );
};

export default TaskList;
