import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({
  className,
  taskList,
  deleteTaskIndex,
  completedList,
  markTaskIndexCompleted
}) => {
  const [tasks, setTasks] = useState(taskList);

  useEffect(
    () => {setTasks(taskList)},
    [taskList]
  );

  const [completed, setCompleted] = useState(completedList);

  useEffect(
    () => {setCompleted(completedList)},
    [completedList]
  );

  const headerRemaining = 
    <h1 style={{'marginBottom': '0'}}>
      Tasks Remaining:
    </h1>;

  const headerCompleted =
    <h1 style={{'marginBottom': '0'}}>
      Tasks Completed
    </h1>;

  return (
    <div>
    {headerRemaining}
      <ul
        style={{
          'justifyContent': 'left',
          'textAlign': 'left',
          'display': 'inline-block'
        }}
      >
        {
          (tasks.length > 0) &&
            tasks.map(
              (taskTitle, i) =>
                <li 
                  key={i + taskTitle}
                  onClick={() => deleteTaskIndex(i)}
                >
                  <Task taskTitle={taskTitle} />
                </li>
            )
        }

        {
          (tasks.length === 0) &&
            <h5>
              No Tasks Currently Remaining...
            </h5>
        }

      </ul>
    </div>
  );
};

export default TaskList;
