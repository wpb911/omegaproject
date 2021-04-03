import React, { Component } from 'react';
import FavoriteProduce from '../FavoriteProduce';
import FavoriteRecipes from "../FavoriteRecipes";
import Card from '../Card';
import produce from '../produce.json';


class AccountFavorites extends Component {
        state = {
            produce
        };

        render() {
            return (
                <div className="container mx-auto">
                    <FavoriteProduce/>
                    <FavoriteRecipes/>
                </div>
            )
        }
}
export default AccountFavorites;