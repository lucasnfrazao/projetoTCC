import userModel from '../models/User.js';

const getUsers = async () => {
  return await userModel.findAll();
};

const createUser = (data) => {
  return userModel.createUser(data);
};

const getUserById = async (id) => {
  console.log(id);
  return await userModel.findUserById(id);
};

const getUserUsingEmail = async (email) => {
  return await userModel.findUserWithEmail(email);
}

const alterarStatusSeguindoUniversidade = async (userId, id, isFollowing) => {
  return await userModel.alterarStatusSeguindoUniversidade(userId, id, isFollowing);
}
 
export default {
    getUsers,
    createUser,
    getUserById,
    getUserUsingEmail,
    alterarStatusSeguindoUniversidade
};