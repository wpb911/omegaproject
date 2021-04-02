import React, { useEffect, useState } from 'react';
import RapidApi from "../utils/RapidApi";
import { useStoreContext } from '../store';

const styles = {
  heart: {
    maxWidth: 15,
        maxHeight: "auto",
    },
    hr: {
        //paddingTop: 15
    },
    badge: {
        marginRight: 5,
        marginTop: 5
    },
    expand: {
        maxWidth: 13,
        maxHeight: "auto",
        marginLeft: 10
    }
};




const Card = (props) => {
  const [foodResult,setFoodResult] = useState({});
  
  useEffect(() =>{
  // RapidApi.getIngredient(props.title,setFoodResult);
  },[])

  

  return (
    <div className="col mb-4">
      <div className="card h-100 ">
        <span>
          <a href="#"
                      className="badge badge-danger float-right"
                  style={styles.badge}>
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
        }<h5 className="card-title text-center">
          {/* <a rel="noreferrer noopener"href={"https://en.wikipedia.org/w/api.php?action=opensearch&search="+props.title+"&limit=1&format=json&origin=*"}>{props.title}</a> */}
                      <a target="_blank" rel="noreferrer noopener" href={"https://en.wikipedia.org/wiki/" + props.title}>{props.title}
                      
                      <span>
                          <img
                              src={process.env.PUBLIC_URL + '/assets/resize.png'}
                              alt='Open in new tab'
                              style={styles.expand}/>
                      </span></a>
                      
                      
        </h5>
            
          <p className="card-text">
            {props.select}
          </p>
            <div style={styles.option}>
          <p className="card-text" style={styles.option}>
            <small className="text-muted" style={styles.option}>
                              <hr style={styles.hr}/><strong>Nutritional Value: </strong><br />
                          <i>Serving: {props.serving}</i><br/>
                              {props.calories} <br />
                              {props.fat} <br />
                              {props.cholesterol} <br />
                              {props.sugar} <br />
                              {props.protein}<hr/>
            </small></p></div>
          <div className="card-body text-center">
            <a href='/recipe' className="btn btn-primary btn-block card-link" onClick={(e) => props.handleSearch(e)}>
              View Recipes
                                        </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;

