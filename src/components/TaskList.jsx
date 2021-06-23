import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

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
    <Container style={{'marginBottom': '4vh'}}>
      <Row>
        <Col>
          <h1 style={{'marginBottom': '0'}}>
            Tasks Remaining:
          </h1>

          {
            (tasks.length > 0) &&
              <ul
                style={{
                  'justifyContent': 'left',
                  'textAlign': 'left',
                  'display': 'inline-block',
                  'marginBottom': '0'
                }}
              >
              {
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
              </ul>
          }

          {
            (tasks.length === 0) &&
              <h5>
                No Tasks Currently Remaining...
              </h5>
          }

        </Col>

        <Col>
          <h1 style={{'marginBottom': '0'}}>
            Tasks Completed:
          </h1>

          {
            (completed.length > 0) &&
              <ul
                style={{
                  'justifyContent': 'left',
                  'textAlign': 'left',
                  'display': 'inline-block',
                  'marginBottom': '0'
                }}
              >
                {
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
          }

          {
            (completed.length === 0) &&
              <h5>
                No Tasks Currently completed...
              </h5>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
