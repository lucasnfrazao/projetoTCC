import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    universidadesSeguidas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Universidade' }]
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
    const newUser = new User({ 
        name: data.name,
        lastName: data.lastName,
        email: data.email, 
        password: data.password, 
        role: data.role,
        universidadesSeguidas: data.universidadesSeguidas
    });
    await newUser.save();
    return newUser;
}

const findUserById = async (id) => {
    const user = await User.findById(id);
    const userObj = user.toObject();
    delete userObj.password;
    return userObj
}

const findUserWithEmail = (email) => {
    return User.findOne({email: email});
}

const alterarStatusSeguindoUniversidade = async (userId, id, isFollowing) => {
    // const operator = isFollowing ? "$push" : "$pull"

    // const user = await User.findById(id);

    // // TODO: Add check to not add two universities with the same id.

    // const updatedUser = await User.findByIdAndUpdate(
    //     userId,
    //     { [operator] : { universidadesSeguidas: id }},
    //     { new: true }
    // )

    return updatedUser
};

export default {
    findAll,
    createUser,
    findUserById,
    findUserWithEmail,
    alterarStatusSeguindoUniversidade,
    User
};