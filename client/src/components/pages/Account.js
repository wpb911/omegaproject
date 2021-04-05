import React, { Component } from 'react';
import FavoriteProduce from '../FavoriteProduce';
import FavoriteRecipes from "../FavoriteRecipes";
import Card from '../Card';
import produce from '../produce.json';
import { useAuthenticatedUser } from '../../utils/auth';
import {useLogout} from "../../utils/auth";

const styles = {
  hr: {
    paddingBottom: 10
}
}

function Account() {
  const user = useAuthenticatedUser();
  const userFavorite = produce.filter(fruit => {
    if (user.favorites.includes(fruit.name)) {
      return fruit
    }
  })

  console.log(userFavorite)

  return (
    <div className="container mx-auto">
      <p className="display-4">
        Favorite Fruits
      </p>
      <hr style={styles.hr}/>
    <div className="row row-cols-1 row-cols-md-3">
      {userFavorite.map(item => (
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
          season={item.season} />
      ))}
      </div>
      <hr style={styles.hr}/>
          <button className="btn btn-danger float-right" onClick={useLogout()}>Logout</button><br/><br/>
      </div>
  )
  
}

export default Account;