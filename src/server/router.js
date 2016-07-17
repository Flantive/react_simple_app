/* jshint esversion: 6 */

class Router {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.app.get('/test', function (req, res) {
      res.status(200).json({ok: 1});
    });
  }
}

module.exports = Router;
