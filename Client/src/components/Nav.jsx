import React from 'react'
import { NavLink } from 'react-router-dom'
import { taskRoutes } from '../routes/taskRoutes'
import './Nav.css';

function Nav() {

    const navItems = [
        { path: taskRoutes.task, name: 'My Tasks' },
        { path: taskRoutes.createTask, name: 'Create A New Task' },
        { path: taskRoutes.updateTask, name: 'Update A Task' },
        { path: taskRoutes.deleteTask, name: 'Delete A Task' },
        { path: '/download', name: 'Download' }
    ]

    return (
        <ul className='nav'>
            {navItems.map((item) =>
            (
                <li className='links' key={item.path}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                </li>
            )
            )}
        </ul>
    )
}

export default Nav