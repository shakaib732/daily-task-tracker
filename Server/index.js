require('dotenv').config();
const app = require('./app')
const { connectDB } = require('./db/connection')

const PORT = process.env.PORT || 8080;

const startServer = async () => {

    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running at PORT http://localhost:${PORT}`)
    })
}

startServer().catch(error => {
    console.log(error)
    process.exit(1);
})