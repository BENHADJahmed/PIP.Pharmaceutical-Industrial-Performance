import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';


const addUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;
  
    // Vérifier si l'email existe déjà dans la base de données
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      res.status(400).json({
        status: 400,
        message: 'Email already exists',
      });
    } else {
      // Créer un nouvel utilisateur
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        role:role,
      });
  
      // Enregistrer l'utilisateur dans la base de données
      await user.save();
  
      res.status(200).json({
        status: 200,
        message: 'User added successfully',
      });
    }
  });

const getAllUser = asyncHandler(async (req, res) => {
    const user = await User.find();
    res.json({ user });
  });


  
const compareUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  
  const user = await User.findOne({ email });

  if (!user) {

    return res.status(400).json({ user, message: "L'utilisateur n'existe pas" });
  }

 else {
  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (passwordMatch) {
    return res.status(200).json({role : user.role , message: 'Mot de passe correct' });
  } else {
    return res.status(300).json({role : user.role , message: 'Mot de passe incorrect' });
  }}
});

export {addUser , getAllUser, compareUser}
