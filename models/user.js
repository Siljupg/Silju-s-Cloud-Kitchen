import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    }
}, {timestamps: true});

 const user = mongoose.model('User', userSchema);

 export default user;
 