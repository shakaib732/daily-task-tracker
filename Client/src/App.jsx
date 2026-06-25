
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import CreateTask from './pages/tasks/CreateTask';
import MyTasks from './pages/tasks/MyTasks';
import UpdateTask from './pages/tasks/UpdateTask';
import DeleteTask from './pages/tasks/DeleteTask';
import Download from './download/Download';
import { taskRoutes } from './routes/taskRoutes'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main className="app-container">
          <Routes>
            <Route path={taskRoutes.task} element={<MyTasks />} />
            <Route path={taskRoutes.createTask} element={<CreateTask />} />
            <Route path={taskRoutes.updateTask} element={<UpdateTask />} />
            <Route path={taskRoutes.deleteTask} element={<DeleteTask />} />
            <Route path='/download' element={<Download />} />
          </Routes>
        </main>
      </BrowserRouter>

    </>
  )
}

export default App
