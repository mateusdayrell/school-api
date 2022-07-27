import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Credenciais inválidas',
      });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.passwordIsValid(password))) {
      return res.status(400).json({
        error: 'Credenciais inválidas',
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
