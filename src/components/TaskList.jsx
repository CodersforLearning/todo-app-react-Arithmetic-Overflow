import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({
  className,
  taskList,
  deleteCompletedIndex,
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

  return (
    <div>
      <h1 style={{'marginBottom': '0'}}>
        Tasks Remaining:
      </h1>

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
                  onClick={() => markTaskIndexCompleted(i)}
                >
                  <Task
                    taskTitle={taskTitle}
                    onHoverColour='green'
                  />
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

      <h1 style={{'marginBottom': '0'}}>
        Tasks Completed:
      </h1>

      <ul>
      {
        (completed.length > 0) &&
          completed.map(
            (taskTitle, i) =>
              <li
                key={i + taskTitle}
                onClick={() => deleteCompletedIndex(i)}
              >
                <Task
                  taskTitle={taskTitle}
                  onHoverColour='red'
                />
              </li>
          )
      }
      </ul>

      {
        (completed.length === 0) &&
          <h5>
            No Tasks Currently completed...
          </h5>
      }
    </div>
  );
};

export default TaskList;
