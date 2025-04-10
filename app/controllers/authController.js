import authService from '../services/authService.js';

const registerStudent = async (req, res) => {
    return authService.registerStudentUser(req, res);
};

const loginUser = async (req, res) => {
    return authService.loginUser(req, res);
};

export default {
    registerStudent,
    loginUser
}