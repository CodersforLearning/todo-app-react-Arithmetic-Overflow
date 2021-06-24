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

  const verticalLine =
    <div
      style={{
        'borderLeft': '2px solid gray',
        'height': '80%',
        'marginTop': '10%',
        'justifyContent': 'center',
        'marginLeft': '45%',
        'opacity': '0.25'
      }}
    >
    </div>

  return (
    <Container style={{'marginBottom': '4vh', 'marginTop': '4vh'}}>
      <Row>
        <Col>
          <h1 style={{'marginBottom': '2vh'}}>
            Tasks Remaining:
          </h1>

          <hr />

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
          {verticalLine}
        </Col>

        <Col>
          <h1 style={{'marginBottom': '2vh'}}>
            Tasks Completed:
          </h1>

          <hr />

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

      <hr />
    </Container>
  );
};

export default TaskList;
