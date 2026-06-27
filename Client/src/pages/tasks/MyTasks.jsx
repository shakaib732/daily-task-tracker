import React from 'react'
import { useState, useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import Card from '../../components/Card'
import './MyTask.css'
import { ApiContext } from '../../context/apiContext'
import { taskReducer } from '../../helper/taskReducer'

function MyTasks() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const api = useContext(ApiContext)

    useEffect(() => {
        api.fetch('/tasks').then((data) => {
            dispatch({
                type: "SET_TASK",
                payload: data
            });
        });
    }, []);

    return (
        <div className='cards_container'>
            {
                tasks.map((task) => {
                    return <Card key={task._id} taskData={task} />
                })
            }
        </div>
    )
}

export default MyTasks