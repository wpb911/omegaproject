import React,{useEffect, useState} from 'react';
import RapidApi from "../utils/RapidApi";
import { useStoreContext } from '../store';

const styles = {
  heart: {
    maxWidth: 15,
    maxHeight: "auto"
  }
};



const Card = (props) => {
  const [foodResult,setFoodResult] = useState({});
  
  useEffect(() =>{
  // RapidApi.getIngredient(props.title,setFoodResult);
  },[])

  

  return (
    <div className="col mb-4">
      <div className="card h-100 text-center">
        <span>
          <a href="#"
            className="badge badge-danger float-right">
            <img src={process.env.PUBLIC_URL + props.heart} style={styles.heart} />
          </a>
        </span>

        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top"
          alt={props.title} />
        <div className="card-body">

          {
        // }<h5 className="card-title">{foodResult.food? foodResult.food.label:("")}</h5>
        }<h5 className="card-title">{props.title}</h5>
            
          <p className="card-text">
            {props.select}
          </p>

          <p className="card-text">
            <small className="text-muted">
              Nutritional Value: <br />
              {props.nutrition}
            </small></p>
          <div className="card-body">
            <a href="#" className="card-link">
              View Recipes
                                        </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;

