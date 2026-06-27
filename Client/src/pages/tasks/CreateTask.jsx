import React from 'react'
import { useState, useEffect, useContext, useReducer } from 'react'
import { ApiContext } from '../../context/apiContext';
import { taskReducer } from '../../helper/taskReducer';
import axios from 'axios';
import './createTask.css'

function CreateTask() {

  let initialTaskState = {
    title: '', task: '', createdDate: '', completedDate: '', isCompleted: 'No'
  }

  const [taskData, dispatch] = useReducer(taskReducer, initialTaskState)
  const api = useContext(ApiContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/tasks', taskData)

    dispatch({
      type:'SET_TASK',
      payload: initialTaskState
    })

  }

  const updateTaskData = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }




  return (
    <form className='form-createTask' onSubmit={handleSubmit}>
      <div className='task_title'>
        <label>Task Title</label>
        <input type="text" value={taskData.title} name='title' onChange={updateTaskData} />
      </div>

      <div className='task_desc'>
        <label>Task Description</label>
        <input type="text" value={taskData.task} name='task' onChange={updateTaskData} />
      </div>

      <div className='task_created'>
        <label>Created Date</label>
        <input type="text" value={taskData.createdDate} name='createdDate' onChange={updateTaskData} />
      </div>

      <div className='task_completed'>
        <label>Completion Date</label>
        <input type="text" value={taskData.completedDate} name='completedDate' onChange={updateTaskData} />
      </div>

      <div className='task_isCompleted'>
        <label>Completed</label>
        <input
          type="radio"
          checked={taskData.isCompleted === 'yes'}
          onChange={(event) => {

            dispatch({
              type: 'UPDATE_FIELD',
              payload: {
                field: 'isCompleted',
                value: event.target.checked ? 'yes' : 'no'
              }
            })
          }}
        />
      </div>

      <button className='createTask_button'>submit</button>

    </form>
  )
}

export default CreateTask