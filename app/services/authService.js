import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userService from '../services/userService.js';

const registerStudentUser = async (req, res) => {
    const {name, lastName, email, password, confirmPassword} = req.body;

    console.log(req.body)
    
    if (!name) {
        return res.status(422).json({msg: 'O nome é obrigatório'});
    }
  
    if (!email) {
        return res.status(422).json({msg: 'O email é obrigatório'});
    }

    const existingUser = await userService.getUserUsingEmail(email);

    console.log(existingUser);

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
    console.log(userObject);
    const user = await userService.createUser(userObject);
  
    try {
      //await user.save()
      res.status(201).json({msg: 'Usuario criado com sucesso'})
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
  
    // Checando se usuário existe...
    if (!user) {
        return res.status(404).json({msg: 'E-mail não encontrado...'});
    }
  
    // Checando a senha...
    const checkPassword = bcrypt.compare(password, user.password);
  
    if (!checkPassword) {
        return res.status(404).json({msg: 'Senha inválida'});
    }
  
    try {
      const secret = process.env.SECRET;
      console.log(secret);
      const token = jwt.sign({
        id: user._id
      },
      secret
    )
  
    res.status(200).json({msg: 'Autenticado com sucesso', token: token});
    } catch(error){
      console.log(error);
      res.status(500).json({msg: error});
    }
}

export default {
    registerStudentUser,
    loginUser
}