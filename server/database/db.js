import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = 'mongodb+srv://user:userpass@blogweb.kwpp5.mongodb.net/BLOGWEB?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;