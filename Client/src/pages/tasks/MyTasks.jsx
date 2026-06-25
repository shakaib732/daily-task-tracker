import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../components/Card'
import './MyTask.css'

function MyTasks() {
    const [tasks, updateTasks] = useState([])

    useEffect(() => {

        const fetchTasks = async () => {
            try {
                const res = await axios.get("http://localhost:8080/tasks", {
                    headers: {
                        'x-api-key': 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
                    }
                })

                updateTasks(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTasks()

    }, [])

    return (
        <div className='cards_container'>
            {
                tasks.map((task) => {
                    return <Card taskData={task} />
                })
            }
        </div>
    )
}

export default MyTasks