import React, { useEffect, useState, useContext, useReducer } from 'react';
import axios from 'axios';
import { ApiContext } from '../../context/apiContext';
import { taskReducer } from '../../helper/taskReducer';
import './deleteTask.css';

function DeleteTask() {

  const initialTaskData = {
    title: '',
    task: '',
    completedData: '',
    createdDate: '',
    isCompleted: ''
  }

  const [tasks, taskDispatch] = useReducer(taskReducer, [])
  const [taskData, taskDataDispatch] = useReducer(taskReducer, initialTaskData)
  const api = useContext(ApiContext);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {

    const res = await api.fetch('/tasks') 
    taskDispatch({
      type: 'SET_TASK',
      payload: res
    })
    // updateTasks(res.data)
  }

  const handleChange = (e) => {
    const id = e.target.value;
    const selectedTask = tasks.find(task => task._id == id);
    taskDataDispatch({
      type: 'SET_TASK',
      payload: selectedTask
    })
  }

  const deleteTask = async (e) => {
    e.preventDefault();
    const { _id, ...formData } = taskData;
    const res = await api.deleteTask(`/tasks/${taskData._id}`)

   taskDataDispatch({
      type: 'SET_TASK',
      payload: initialTaskData
    })
    fetchTasks();
  }


  return (
    <div className="delete-page-container">
      <div className="select-task-section">
        <h2 className="section-title">Select a Task to Delete</h2>
        <ul className="task-select-list">
          {
            tasks.map((task) => {
              const isSelected = taskData._id === task._id;
              return <li key={task._id} className={`task-select-item ${isSelected ? 'selected' : ''}`}>
                <label className="task-select-label">
                  <input type='radio' onChange={handleChange} value={task._id} checked={isSelected} name='selectedTask' className="radio-input" />
                  <span className="task-select-title">{task.title}</span>
                </label>
              </li>
            })
          }
        </ul>
      </div>

      {taskData._id ? (
        <div className="delete-preview-card">
          <h2 className="section-title warning-title">Are you sure?</h2>

          <div className="preview-details">
            <div className="preview-item">
              <span className="preview-label">Title</span>
              <span className="preview-value">{taskData.title}</span>
            </div>
            {taskData.task && (
              <div className="preview-item">
                <span className="preview-label">Description</span>
                <span className="preview-value">{taskData.task}</span>
              </div>
            )}
          </div>

          <div className="warning-box">
            <p>Warning: This action is permanent and cannot be undone.</p>
          </div>

          <button className="deleteTask_button" onClick={deleteTask}>Delete Task</button>
        </div>
      ) : (
        <div className="select-prompt">
          <p>Please select a task from the list above to view delete options.</p>
        </div>
      )}
    </div>
  )
}

export default DeleteTask