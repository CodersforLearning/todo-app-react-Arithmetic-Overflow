import React, { useState, useEffect } from 'react';

import Task from './Task';

const TaskList = ({ className, taskList, deleteTaskIndex }) => {
  const [tasks, setTasks] = useState(taskList);
  const [strikethrough, setStrikethrough] = useState(taskList.map(_ => false));

  useEffect(
    () => {setTasks(taskList)},
    [taskList]
  );

  const header = 
    <h1 style={{'marginBottom': '0'}}>
      Tasks Remaining:
    </h1>;

  if(tasks.length == 0) {
    return (
      <div>
      {header}
      <h5>
        No Tasks Currently Remaining...
      </h5>
      </div>
    );
  }

  else{
    return (
      <div>
      {header}
        <ul
          style={{
            'justifyContent': 'left',
            'textAlign': 'left',
            'display': 'inline-block'
          }}
        >
          {
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
        </ul>
      </div>
    );
  }
};

export default TaskList;
