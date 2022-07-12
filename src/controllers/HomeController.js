import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mateus',
      sobrenome: 'Dayrell',
      email: 'mateus@email.com',
      telefone: '38998053356',
      idade: 22,
      peso: 62.0,
      altura: 1.72,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
