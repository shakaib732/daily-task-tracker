const helper = require('../utils/helper')
const { ObjectId } = require("mongodb")

class TaskRepository {
    constructor() { }

    getTasks = async () => {
        const taskCollection = await helper.getTasks();
        return taskCollection.find({}).toArray()
    }

    getTaskById = async (id) => {
        const taskCollection = await helper.getTasks();
        return taskCollection.findOne({ _id: new ObjectId(id) })
    }

    createTask = async (taskDetails) => {
        const taskCollection = await helper.getTasks();
        return taskCollection.insertOne(taskDetails)
    }

    updateTask = async (taskDetails, id) => {
        const taskCollection = await helper.getTasks();
        return taskCollection.updateOne({ _id: new ObjectId(id) }, { $set: taskDetails })
    }

    deleteTask = async (id) => {
        const taskCollection = await helper.getTasks();
        return taskCollection.deleteOne({ _id: new ObjectId(id) })
    }
}

module.exports = TaskRepository