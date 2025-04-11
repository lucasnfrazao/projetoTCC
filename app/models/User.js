import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: String,
    lastName: String,
    email: String,
    password: String,
    role: String
})

const findAll = async () => {
    const users = await User.find();

    const userMap = {};
    users.forEach((user) => {
        userMap[user._id] = user;
    });
    
    return userMap;
};

const createUser = async (data) => {
    const newUser = new User({ name: data.name, lastName: data.lastName, email: data.email, password: data.password, role: data.role });
    console.log(newUser);
    await newUser.save();
    return newUser;
}

const findUserById = async (id) => {
    return await User.findById(id);
}

const findUserWithEmail = (email) => {
    return User.findOne({email: email});
}

export default {
    findAll,
    createUser,
    findUserById,
    findUserWithEmail,
    User
};