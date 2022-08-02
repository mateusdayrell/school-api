class HomeController {
  async index(req, res) {
    res.json('index home');
  }
}

export default new HomeController();
