import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './createTask.css'

function CreateTask() {

  const [taskData, updateTaskData] = useState({
    title: '', task: '', createdDate: '', completedDate: '', isCompleted: 'No'
  })


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/tasks",
        taskData,
        {
          headers: {
            'x-api-key': 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
          }
        }
      );

      updateTaskData({
        title: "",
        task: "",
        createdDate: "",
        completedDate: "",
        isCompleted: 'No',
      });

    } catch (err) {
      console.log(err)
      throw err;
    }

  }




  return (
    <form className='form-createTask' onSubmit={handleSubmit}>
      <div className='task_title'>
        <label>Task Title</label>
        <input type="text" value={taskData.title} onChange={(event) => updateTaskData({ ...taskData, title: event.target.value })} />
      </div>

      <div className='task_desc'>
        <label>Task Description</label>
        <input type="text" value={taskData.task} onChange={(event) => updateTaskData({ ...taskData, task: event.target.value })} />
      </div>

      <div className='task_created'>
        <label>Created Date</label>
        <input type="text" value={taskData.createdDate} onChange={(event) => updateTaskData({ ...taskData, createdDate: event.target.value })} />
      </div>

      <div className='task_completed'>
        <label>Completion Date</label>
        <input type="text" value={taskData.completedDate} onChange={(event) => updateTaskData({ ...taskData, completedDate: event.target.value })} />
      </div>

      <div className='task_isCompleted'>
        <label>Completed</label>
        <input
          type="radio"
          checked={taskData.isCompleted === 'yes'}
          onChange={(event) => {
            updateTaskData({
              ...taskData,
              isCompleted: event.target.checked ? 'yes' : 'no'
            });
          }}
        />
      </div>

      <button className='createTask_button'>submit</button>

    </form>
  )
}

export default CreateTask