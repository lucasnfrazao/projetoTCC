import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userService from '../services/userService.js';

const registerStudentUser = async (req, res) => {
    const {name, lastName, email, password, confirmPassword} = req.body;

    if (!name) {
        return res.status(422).json({msg: 'O nome é obrigatório'});
    }
  
    if (!email) {
        return res.status(422).json({msg: 'O email é obrigatório'});
    }

    const existingUser = await userService.getUserUsingEmail(email);

    if (existingUser !== null) {
        return res.status(401).json({msg: 'Existing user...'});
    }
  
    if (!password) {
        return res.status(422).json({msg: 'A senha é obrigatória'});
    }

    if (password !== confirmPassword) {
        return res.status(422).json({msg: 'Combinação de senha incorreta.'});
    }
  
    // Criptography
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
  
    // create user
    
    const role = 'aluno';
    const userObject = {
        name: name,
        lastName: lastName,
        email: email,
        password: passwordHash,
        role: role
    };

    const user = await userService.createUser(userObject);
  
    const JWT_SECRET = process.env.SECRET;

    try {
        // TODO: Add expiration date back.
        const token = jwt.sign({ id: user._id }, JWT_SECRET)
        res.status(200).json({ token: token });
    } catch(error) {
      res.status(500).json({msg: error})
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(422).json({msg: 'O nome é obrigatório'});
    }
  
    if (!password) {
        return res.status(422).json({msg: 'O email é obrigatório'});
    }
  
    const user = await userService.getUserUsingEmail(email);
    delete user.password;
  
    // Checando se usuário existe...
    if (!user) {
        return res.status(404).json({msg: 'E-mail não encontrado...'});
    }
  
    // Checando a senha...
    const checkPassword = await bcrypt.compare(password, user.password);
  
    if (checkPassword === false) {
        return res.status(404).json({msg: 'Senha inválida'});
    }
  
    const JWT_SECRET = process.env.SECRET;

    try {
        const token = jwt.sign({ id: user._id }, JWT_SECRET)
        res.status(200).json({ user: user, token: token });
    } catch(error){
      console.log(error);
      res.status(500).json({msg: error});
    }
}

export function authenticate(req, res, next) {
    const JWT_SECRET = process.env.SECRET

    const auth = req.headers.authorization
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing token' })
    }

    const token = auth.split(' ')[1]
    try {
        const payload = jwt.verify(token, JWT_SECRET)
        req.user = payload
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Token Expirado' })
    }
}

export async function authenticateAdmin(req, res, next)  {
    const JWT_SECRET = process.env.SECRET

    const auth = req.headers.authorization
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing token' })
    }

    const token = auth.split(' ')[1]
    try {
        const payload = jwt.verify(token, JWT_SECRET)
        const userModel = await userService.getUserById(payload.id);
        if (userModel.role == "admin") {
            req.user = payload
            next()
        } else {
            return res.status(401).json({ message: 'Usuário não autorizado' })
        }
    } catch (err) {
        return res.status(401).json({ message: 'Usuário não autorizado' })
    }
}

const getCurrentUserUsingToken = async (req, res) => {
    const userId = req.user.id
    const user = await userService.getUserById(userId)
    if (!user) return res.status(404).end()
    res.json(user)
}

export default {
    registerStudentUser,
    getCurrentUserUsingToken,
    authenticate,
    authenticateAdmin,
    loginUser
}