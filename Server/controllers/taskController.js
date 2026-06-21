const TaskServices = require('../services/taskServices')
const taskServices = new TaskServices();

class TaskController {
    constructor() { }

    getTasks = async (req, res, next) => {
        try {
            const result = await taskServices.getTasks()
            res.status(200).json(result)
        } catch (error) { next(error) }
    }

    getTaskById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await taskServices.getTaskById(id);
            res.status(200).json(result);
        } catch (error) { next(error) }
    }

    createTask = async (req, res, next) => {
        try {
            const taskDetails = req.body;
            const result = await taskServices.createTask(taskDetails)
            res.status(201).json({
                message: 'Task created successfully',
                insertionId: result.insertedId
            })
        } catch (error) { next(error) }
    }

    updateTask = async (req, res, next) => {
        try {
            const { id } = req.params;
            const taskData = req.body;
            await taskServices.updateTask(taskData, id)
            res.status(201).json({
                meesage: 'Task updated successfully'
            })
        } catch (error) { next(error) }
    }

    deleteTask = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await taskServices.deleteTask(id)
            res.status(200).json({
                message: 'Task Deleted Succssfully',
                deleteCount: result.deleteCount
            })
        } catch (error) { next(error) }
    }
}

module.exports = TaskController;