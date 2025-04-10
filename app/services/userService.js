import userModel from '../models/User.js';

const getUsers = async () => {
  return await userModel.findAll();
};

const createUser = (data) => {
  return userModel.createUser(data);
};

const getUserById = (id) => {
  return userModel.findById(id);
};

const getUserUsingEmail = async (email) => {
  return await userModel.findUserWithEmail(email);
}

export default {
    getUsers,
    createUser,
    getUserById,
    getUserUsingEmail
};