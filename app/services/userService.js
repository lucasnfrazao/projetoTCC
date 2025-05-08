import mongoose from 'mongoose';
import userModel from '../models/User.js';
import universidadeModel from '../models/Universidade.js';

const getUsers = async () => {
  return await userModel.findAll();
};

const createUser = (data) => {
  return userModel.createUser(data);
};

const getUserById = async (id) => {
  return await userModel.findUserById(id);
};

const getUserUsingEmail = async (email) => {
  return await userModel.findUserWithEmail(email);
}

const alterarStatusSeguindoUniversidade = async (userId, uniId, isFollowing) => {
  const operator = isFollowing ? "$push" : "$pull"

  const session = await mongoose.startSession();
  session.startTransaction();

  const User = userModel.User;
  const Universidade = universidadeModel.Universidade;

  const newUni = await Universidade.updateOne(
    { _id: uniId },
    { [operator]: { usuariosSeguindo: userId } },
    { new: true }
  )

  const newUser = await User.updateOne(
    { _id: userId },
    { [operator]: { universidadesSeguidas: uniId } },
    { new: true }
  )

  return (newUser + newUni)
}
 
export default {
    getUsers,
    createUser,
    getUserById,
    getUserUsingEmail,
    alterarStatusSeguindoUniversidade
};