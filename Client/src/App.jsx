
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiProvider } from './context/apiContext';
import Nav from './components/Nav';
import CreateTask from './pages/tasks/CreateTask';
import MyTasks from './pages/tasks/MyTasks';
import UpdateTask from './pages/tasks/UpdateTask';
import DeleteTask from './pages/tasks/DeleteTask';
import Download from './download/Download';
import { taskRoutes } from './routes/taskRoutes'
import { ErrorProvider } from './errorProvider/errorContext'


import './App.css'

function App() {

  return (
    <>
      <ErrorProvider>
        <ApiProvider>
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
        </ApiProvider>
      </ErrorProvider>
    </>
  )
}

export default App
