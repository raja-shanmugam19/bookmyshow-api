const HealthController = require('../controller/HealthController');
const MovieListController = require('../controller/MovieListController');

class Route {

     static createRoutes (route) {
      route.get('/', (req, res) => {
        HealthController.healthCheck(req, res)
      });
      route.get('/movielist', (req, res) => {
        MovieListController.getMovieList(req, res)
      });
    }

}
module.exports = Route;