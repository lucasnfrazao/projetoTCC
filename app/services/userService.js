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

const getFollowedUniversities = async (userId) => {
  const user = await userModel.findUserById(userId);
  const followedUniIds = user.universidadesSeguidas;

  if (followedUniIds === null) {
    return [];
  }

  if (!Array.isArray(followedUniIds)) {
    return [];
  } 

  const Universidade = universidadeModel.Universidade;

  const universidades = (
    await Promise.all(followedUniIds.map(id => Universidade.findById(id)))
  ).filter(Boolean);

  return universidades
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

  const newUser = await User.findOneAndUpdate(
    { _id: userId },
    { [operator]: { universidadesSeguidas: uniId } },
    { new: true }
  ).select('-password');

  return newUser
}
 
export default {
    getUsers,
    createUser,
    getUserById,
    getUserUsingEmail,
    getFollowedUniversities,
    alterarStatusSeguindoUniversidade
};