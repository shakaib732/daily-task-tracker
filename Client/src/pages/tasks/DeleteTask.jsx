import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './deleteTask.css';

function DeleteTask() {

  const [tasks, updateTasks] = useState([])

  const [taskData, updatetaskData] = useState({
    title: '',
    task: '',
    completedData: '',
    createdDate: '',
    isCompleted: ''
  })

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:8080/tasks', {
      headers: {
        'x-api-key': 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
      }
    })
    updateTasks(res.data)
  }

  const handleChange = (e) => {
    const id = e.target.value;
    const selectedTask = tasks.find(task => task._id == id);
    updatetaskData(selectedTask)
  }

  const deleteTask = async (e) => {
    e.preventDefault();
    const { _id, ...formData } = taskData;
    const res = await axios.delete(`http://localhost:8080/tasks/${taskData._id}`, {
      headers: {
        'x-api-key': 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
      }
    })

    updatetaskData({
    title: '',
    task: '',
    completedData: '',
    createdDate: '',
    isCompleted: ''
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