import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        min: 10,
        max: 10
    }
});

const user= mongoose.model('user', userSchema);

export default user;