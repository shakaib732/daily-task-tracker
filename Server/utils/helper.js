const {getTaskCollection} = require('../db/connection');

const getTasks = async () => {
    const tasks = await getTaskCollection()
    return tasks;
}

module.exports = {getTasks}