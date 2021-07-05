const axios = require('axios');
const constants = require('../config/constants');
class MovieListService {

     static getMoviesList = async () => {
        try {
        const results = await axios.get(constants.API_URL);
        if(results.data) {
            console.log('Fetched data successfully');
            return results.data;
        }
        } catch(error) {
            console.log('error in fetching the data', error);
        }
    }
}
module.exports = MovieListService;