import React from 'react'
import './Card.css'

function Card({taskData}) {
    const isCompleted = taskData.isCompleted === 'true' || taskData.isCompleted === 'yes';
  return (
    <>
    <div className='card' key={taskData._id}>
        <div className='card_header'>
            <h2>{taskData.title}</h2>
            <span className={`status ${isCompleted ? 'status-done' : 'status-pending'}`}>
                {isCompleted ? "Done" : "Pending"}
            </span>
        </div>
        <h3 className='card_desc'>{taskData.task}</h3>
        <div className='card_dates'>
            <p className='created_date'>
               <span>Created Date : </span> {taskData.createdDate}
            </p>
            <p className='completed_date'>
                <span>Completed Date : </span> {taskData.completedDate}
            </p>
        </div>
    </div>
    </>
  )
}

export default Card