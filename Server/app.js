const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes')
const handleError = require('./globalErrorHandling/errorHandler');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use(handleError)

module.exports = app;