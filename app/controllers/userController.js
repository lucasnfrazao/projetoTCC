import userService from '../services/userService.js';

const getAllUsers = async(req, res) => {
  const allUsers = await userService.getUsers();
  if (allUsers.count == 0) {
    res.status(404).json({ message: 'Users not found' });
  } else {
    res.status(200).json(allUsers);
  }
};

const createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export default {
    getAllUsers,
    createUser,
    getUserById
};
