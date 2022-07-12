import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    console.log(req.body);
    try {
      const novoUser = await User.create(req.body);
      return res.json({ novoUser });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID inválido'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.update(req.body);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID inválido'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();
      return res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
