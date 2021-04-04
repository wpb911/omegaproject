import React, { Component } from 'react';
import FavoriteProduce from '../FavoriteProduce';
import FavoriteRecipes from "../FavoriteRecipes";
import Card from '../Card';
import produce from '../produce.json';
import { useAuthenticatedUser } from '../../utils/auth';

function Account() {
  const user = useAuthenticatedUser();
  const userFavorite = produce.filter(fruit => {
    if (user.favorites.includes(fruit.name)) {
      return fruit
    }
  })

  console.log(userFavorite)

  return (
      userFavorite.map(item =>(
        <Card 
        id={item.id}
        title={item.name}
        select={item.select}
        image={item.image}
        calories={item.calories}
        fat={item.fat}
        sugar={item.sugar}
        cholesterol={item.cholesterol}
        protein={item.protein}
        serving={item.serving}
        isFavorited={user && user.favorites.includes(item.name)}
        season={item.season}/>
      ))
  )

}
export default Account;