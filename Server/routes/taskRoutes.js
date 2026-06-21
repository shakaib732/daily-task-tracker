const express = require('express');
const router = express.Router();
const { validateTaskSchema, validateObjectId } = require('../validators/taskValidaions')
const { isAuthorized } = require('../authentiction/authorization')

const TaskController = require('../controllers/taskController');
const taskController = new TaskController();

router.get('/', isAuthorized, taskController.getTasks);
router.get('/:id',isAuthorized, validateObjectId, taskController.getTaskById)
router.post('/', isAuthorized, validateTaskSchema, taskController.createTask)
router.put('/:id', isAuthorized, validateObjectId, taskController.updateTask)
router.delete('/:id', isAuthorized, validateObjectId, taskController.deleteTask)

module.exports = router;