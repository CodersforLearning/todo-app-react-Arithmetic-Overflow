import React, { useState } from 'react';

import TaskList from './TaskList';
import AdditionPanel from './AdditionPanel';

import { Container, Row, Col } from 'react-bootstrap';


const TaskPanel = ({ className }) => {
  const [taskList, setTaskList] =
    useState([]);

  const [completedList, setCompletedList] =
    useState([]);

  const appendTask = newTask =>
    setTaskList([...taskList, newTask]);

  const appendCompleted = newCompleted =>
    setCompletedList([...completedList, newCompleted]);

  const deleteTaskIndex = i => 
    setTaskList(
      [
        ...taskList.slice(0, i),
        ...taskList.slice(i+1)
      ]
    );

  const deleteCompletedIndex = i =>
    setCompletedList(
      [
        ...completedList.slice(0, i),
        ...completedList.slice(i+1)
      ]
    );

  const markTaskIndexCompleted = i => {
    appendCompleted(taskList[i]);
    deleteTaskIndex(i);
  }

  return (
    <>
      <TaskList
        taskList={taskList}
        completedList={completedList}
        deleteCompletedIndex={deleteCompletedIndex}
        markTaskIndexCompleted={markTaskIndexCompleted}
      />
      <AdditionPanel appendTask={appendTask} />
    </>
  );
};

export default TaskPanel;
