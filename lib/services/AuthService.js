import Auth from '../models/Auth.js';
import bcrypt from 'bcrypt';

export default class AuthService {
  //create a user
  static async create({ username, email, password }) {
    const user = await Auth.findOne({ where: { email } });

    if (user) throw new Error('Cannot create user');
    const passwordHash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

    return Auth.signUp(username, email, passwordHash);
  }

  //authenticate a user (do we need to pass in username?)
  static async authenticate({ email, password }) {
    const user = await Auth.findOne({ where: { email } });
    if (!user) throw new Error('User does not exist');

    const matchingPassword = await bcrypt.compare(password, user.passwordHash);
    if (!matchingPassword) throw new Error('Incorrect password');

    return user;
  }
}
