const fs = require('fs');
const events = require('events');
const MovieListService = require('../services/MovieListService');


class MovieListController {

    static async getMovieList(req, res) {
    const results =  await MovieListService.getMoviesList(req, res);
    if(results) {
        res.status(200).send(results);
    } else {
        res.status(400).send('Something went wrong');
    }
    } 
}
module.exports = MovieListController;