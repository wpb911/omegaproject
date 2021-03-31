import React, { useState } from 'react';
import recipeApi from '../../utils/recipeApi';
import RecipeCard from '../RecipeCard';


const Recipe = (props) => {
    const [recipes, setRecipes] = useState([]);

   
    
    
    return (
        <div className="container">

            <div className="row row-cols-1 row-cols-md-3">
                <RecipeCard />


            </div>

        </div>
    )
}

export default Recipe;