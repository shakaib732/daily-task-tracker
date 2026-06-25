import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './updateTask.css';

function UpdateTask() {

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...formData } = taskData;
    const res = await axios.put(`http://localhost:8080/tasks/${taskData._id}`, formData, {
      headers: {
        'x-api-key': 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
      }
    })

    console.log(res);
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
            <input type="text" value={taskData.title} onChange={(event) => updatetaskData({ ...taskData, title: event.target.value })} />
          </div>

          <div className="form-group">
            <label>Task Description</label>
            <input type="text" value={taskData.task} onChange={(event) => updatetaskData({ ...taskData, task: event.target.value })} />
          </div>

          <div className="form-group">
            <label>Created Date</label>
            <input type="text" value={taskData.createdDate} onChange={(event) => updatetaskData({ ...taskData, createdDate: event.target.value })} />
          </div>

          <div className="form-group">
            <label>Completion Date</label>
            <input type="text" value={taskData.completedDate} onChange={(event) => updatetaskData({ ...taskData, completedDate: event.target.value })} />
          </div>

          <div className="form-group row-group">
            <label>Completed</label>
            <input
              type="radio"
              checked={taskData.isCompleted === 'yes'}
              onChange={(event) => {
                updatetaskData({
                  ...taskData,
                  isCompleted: event.target.checked ? 'yes' : 'no'
                });
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