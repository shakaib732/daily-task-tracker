const { ObjectId } = require('mongodb');
const taskRepository = require('../repository/taskRepository')


const getTasks = async () => {
    try {
        const result = await taskRepository.getTasks()
        return result;
    } catch (error) { throw error };
}

const getTaskById = async (id) => {
    try {
        const result = await taskRepository.getTaskById(id);
        return result;
    } catch (error) {
        throw error;
    }

}


const createTask = async (taskDetails) => {
    try {
        const result = await taskRepository.createTask(taskDetails);
        return result;
    } catch (error) { throw error };
}

const updateTask = async (taskDetails, id) => {
    try {
        await taskRepository.updateTask(taskDetails, id)
    } catch (error) { throw error };
}

const deleteTask = async (id) => {
    try {
        const result = await taskRepository.deleteTask(id);
        return result
    } catch (error) { throw error };


}

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask }