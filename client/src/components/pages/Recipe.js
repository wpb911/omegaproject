import React, { Component } from 'react';
import recipeApi from '../../utils/recipeApi';
import RecipeCard from '../RecipeCard';


class Recipe extends Component {
    state = {
        recipes: [],
        search: ""
    };

    handleInputChange = (e) => {
        this.setState({ search: e.target.value })
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({ search: e.target.value })

        recipeApi.getRecipes(this.state.search)
            .then((res) => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                } else {
                    let results = res.data.items;
                    console.log(results);
                    results = results.map((recipes) => {
                        recipes = {
                            key: res.recipe.label,
                            title: res.recipe.label,
                            image: res.recipe.image,
                            ingredients: res.recipe.ingredientLines,
                            url: res.recipe.url
                        };
                        return recipes;
                    });
                    this.setState({ recipes: results, search: "" })
                }
            })
    };

   
    
    render() {
        return (
            <div className="container">
                <div className="row col-fluid">
                    <RecipeCard />

</div>
                </div>

            
        )
    }
}

export default Recipe;