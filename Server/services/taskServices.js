const TaskRepository = require('../repository/taskRepository')
const taskRepository = new TaskRepository();

class TaskServices {
    constructor() { }

    getTasks = async () => {
        try {
            const result = await taskRepository.getTasks()
            return result;
        } catch (error) { throw error };
    }

    getTaskById = async (id) => {
        try {
            const result = await taskRepository.getTaskById(id);
            return result;
        } catch (error) { throw error };
    }

    createTask = async (taskDetails) => {
        try {
            const result = await taskRepository.createTask(taskDetails);
            return result;
        } catch (error) { throw error };
    }

    updateTask = async (taskDetails, id) => {
        try {
            await taskRepository.updateTask(taskDetails, id)
        } catch (error) { throw error };
    }

    deleteTask = async (id) => {
        try {
            const result = await taskRepository.deleteTask(id);
            return result
        } catch (error) { throw error };
    }
}

module.exports = TaskServices