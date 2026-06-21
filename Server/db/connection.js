const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let taskCollection;

const connectDB = async ()=> {
    try {
        await client.connect();

        const database = client.db('taskTracker');

        taskCollection = database.collection('tasks');

        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getTaskCollection = () => {
    if (!taskCollection) {
        throw new Error('Database is not connected');
    }

    return taskCollection;
}

module.exports = {
    connectDB,
    getTaskCollection
};
