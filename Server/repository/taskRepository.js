const { ObjectId } = require("mongodb")
const helper = require('../utils/helper')

const getTasks = async () => {
    const taskCollection = await helper.getTasks();
    return taskCollection.find({}).toArray()
}

const getTaskById = async (id) =>{
    const taskCollection = await helper.getTasks();
    return taskCollection.findOne({_id: new ObjectId(id)})
}

const createTask = async (taskDetails) => {
    const taskCollection = await helper.getTasks();
    return taskCollection.insertOne(taskDetails)
}

const updateTask = async (taskDetails,id) => {
    const taskCollection = await helper.getTasks();
    return taskCollection.updateOne({ _id: new ObjectId(id) }, { $set: taskDetails })
}

const deleteTask = async (id) => {
    const taskCollection = await helper.getTasks();
    return taskCollection.deleteOne({ _id: new ObjectId(id) })
}


module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask }