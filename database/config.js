const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect('mongodb+srv://chavanne:Teodio2023@cluster0.x5g5cxt.mongodb.net/?retryWrites=true&w=majority')
        console.log(connection)
        const url = `${connection.host}:${connection.port}`
        console.log(`MongoDB connected in ${url}`)
    } catch (error) {
        console.log(`Error MongoDB: ${error.message}`)
    }
}

module.exports = connectDB