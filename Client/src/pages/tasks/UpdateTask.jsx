import React, { useEffect, useState, useReducer, useContext } from 'react';
import { taskReducer } from '../../helper/taskReducer';
import { ApiContext } from '../../context/apiContext';
import './updateTask.css';

function UpdateTask() {
  const initialTaskData = {
    title: '',
    task: '',
    completedData: '',
    createdDate: '',
    isCompleted: ''
  }

  const api = useContext(ApiContext);
  const [tasks, taskDispatch] = useReducer(taskReducer, [])
  const [taskData, taskDataDispatch] = useReducer(taskReducer, initialTaskData)

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await api.fetch('/tasks');
      taskDispatch({
        type: 'SET_TASK',
        payload: res
      })
    }catch(err){
      console.log("error=>",err);
      throw err
    }
    
  }

  const handleChange = (e) => {
    const id = e.target.value;
    const selectedTask = tasks.find(task => task._id == id);
    taskDataDispatch({
      type: 'SET_TASK',
      payload: selectedTask
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...formData } = taskData;
    const res = await api.put(`/tasks/${taskData._id}`, formData)
    taskDataDispatch({
      type: "SET_TASK",
      payload: initialTaskData
    })
    fetchTasks();
  }

  const updatetaskData = (e) => {
    taskDataDispatch({
      type: 'UPDATE_FIELD',
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }


  return (
    <div className="update-page-container">
      <div className="select-task-section">
        <h2 className="section-title">Select a Task to Update</h2>
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
        <form className="form-updateTask" onSubmit={handleSubmit}>
          <h2 className="form-title">Edit Task Details</h2>

          <div className="form-group">
            <label>Task Title</label>
            <input type="text" value={taskData.title} name='title' onChange={updatetaskData} />
          </div>

          <div className="form-group">
            <label>Task Description</label>
            <input type="text" value={taskData.task} name='task' onChange={updatetaskData} />
          </div>

          <div className="form-group">
            <label>Created Date</label>
            <input type="text" value={taskData.createdDate} name='createdDate' onChange={updatetaskData} />
          </div>

          <div className="form-group">
            <label>Completion Date</label>
            <input type="text" value={taskData.completedDate} name='completedDate' onChange={updatetaskData} />
          </div>

          <div className="form-group row-group">
            <label>Completed</label>
            <input
              type="radio"
              checked={taskData.isCompleted === 'yes'}
              onChange={(event) => {
                taskDataDispatch({
                  type: 'UPDATE_FIELD',
                  payload: {
                    field: 'isCompleted',
                    value: event.target.checked ? 'yes' : 'no'
                  }
                })
              }}
              className="radio-status"
            />
          </div>

          <button className="updateTask_button">Update Task</button>

        </form>
      ) : (
        <div className="select-prompt">
          <p>Please select a task from the list above to start editing.</p>
        </div>
      )}
    </div>
  )
}

export default UpdateTask