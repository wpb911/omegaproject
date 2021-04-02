import axios from 'axios';

export default {
    getRecipes: function (query) {
        return axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&health=vegetarian`)
    }
};