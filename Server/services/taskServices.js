class TaskServices {
    constructor(taskRepository) { 
        this.taskRepository = taskRepository;
    }

    getTasks = async () => {
        try {
            const result = await this.taskRepository.getTasks()
            return result;
        } catch (error) { throw error };
    }

    getTaskById = async (id) => {
        try {
            const result = await this.taskRepository.getTaskById(id);
            return result;
        } catch (error) { throw error };
    }

    createTask = async (taskDetails) => {
        try {
            const result = await this.taskRepository.createTask(taskDetails);
            return result;
        } catch (error) { throw error };
    }

    updateTask = async (taskDetails, id) => {
        try {
            await this.taskRepository.updateTask(taskDetails, id)
        } catch (error) { throw error };
    }

    deleteTask = async (id) => {
        try {
            const result = await this.taskRepository.deleteTask(id);
            return result
        } catch (error) { throw error };
    }
}

module.exports = TaskServices