const express = require('express');
const router = express.Router();
const { validateTaskSchema, validateObjectId } = require('../validators/taskValidaions')
const { isAuthorized } = require('../authentiction/authorization')

const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController')



router.get('/', isAuthorized, getTasks);
router.get('/:id',isAuthorized, validateObjectId, getTaskById)
router.post('/', isAuthorized, validateTaskSchema, createTask)
router.put('/:id', isAuthorized, validateObjectId, updateTask)
router.delete('/:id', isAuthorized, validateObjectId, deleteTask)


module.exports = router;
