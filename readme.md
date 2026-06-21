# Daily Focus Tracker

A full-stack task tracker built with React, Vite, Express, and MongoDB. Users can create tasks, view tasks, delete tasks, and download the full task list as a Word-readable `.doc` file.

## Prerequisites

Install these before running the project:

- Node.js 20 or newer
- npm
- MongoDB Atlas account or a running MongoDB database
- Git, optional but recommended

## Project Structure

```txt
daily-focus-tracker/
  client/      React + Vite frontend
  server/      Express + MongoDB backend
```

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
api_key="your_api_key"
PORT=8080
```

`PORT` is optional. If you do not set it, the server uses `8080`.

## Install Dependencies

From the project root:

```bash
cd server
npm install
```

Then install the frontend dependencies:

```bash
cd ../client
npm install
```

## Run The App

Start the backend:

```bash
cd server
npm run dev
```

The API will run at:

```txt
http://localhost:8080
```

In a second terminal, start the frontend:

```bash
cd client
npm run dev
```

Vite will show the frontend URL in the terminal, usually:

```txt
http://localhost:5173
```

## How To Use

1. Open the frontend in your browser.
2. Go to **Create Task** to add a new task.
3. Go to **My Tasks** to view all saved tasks.
4. Go to **Delete Task** to select and delete a task.
5. Go to **Download** to export all tasks as `daily-focus-tasks.doc`.

## API Routes

```txt
GET    /tasks           Get all tasks
GET    /tasks/:id       Get a task by id.
POST   /tasks           Create a task
PUT    /tasks/:id       Update a task
DELETE /tasks/:id       Delete a task
```

## Production Build

Build the frontend:

```bash
cd client
npm run build
```

Preview the built frontend:

```bash
npm run preview
```

Start the backend in production mode:

```bash
cd server
npm start