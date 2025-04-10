import authService from '../services/authService.js';

const registerStudent = async (req, res) => {
    return authService.registerStudentUser(req, res);
};

export default {
    registerStudent
}