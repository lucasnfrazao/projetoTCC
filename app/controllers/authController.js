import authService from '../services/authService.js';

const registerStudent = async (req, res) => {
    return authService.registerStudentUser(req, res);
};

const loginUser = async (req, res) => {
    return authService.loginUser(req, res);
};

const getCurrentUser = async (req, res) => {
    return authService.getCurrentUserUsingToken(req, res);
};

export default {
    registerStudent,
    getCurrentUser,
    loginUser
}