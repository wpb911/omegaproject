import React from 'react';


const styles = {
    heart: {
      maxWidth: 13,
      maxHeight: "auto"
    },
    badge: {
        marginLeft: 5
    }
};
  

const RecipeCard = ({ recipe }) => {
 
    return (
        <div className="col mb-4">


        <div className="card h-100 text-center">

  
          <img
            src={recipe.image}
            className="card-img-top img-fluid"
            alt={recipe.label} />
                <div className="card-body">
                <span>
            <a href="#"
              className="badge badge-danger float-right" style={styles.badge}>
              <img src={process.env.PUBLIC_URL + "/assets/heart.png"} style={styles.heart} />
            </a>
          </span>
  
            {
          // }<h5 className="card-title">{foodResult.food? foodResult.food.label:("")}</h5>
          }<h6 className="card-title">
            {/* <a rel="noreferrer noopener"href={"https://en.wikipedia.org/w/api.php?action=opensearch&search="+props.title+"&limit=1&format=json&origin=*"}>{props.title}</a> */}
            {recipe.label}
          </h6>
              
            <p className="card-text">

            </p>
              <div style={styles.option}>
            <p className="card-text" style={styles.option}>
              <small className="text-muted text-left" style={styles.option}>
                {recipe.ingredientLines.map(ingredient =>{
                  return <li>{ingredient}</li>
                })}
                
              </small></p></div><br/>
            <div className="card-body">
              <a href={recipe.url} className="card-link btn btn-sm btn-secondary">
                            View Full Recipe
                                          </a>
                        
                        
                    </div>
                    
                </div>
        </div>
        </div>
        
        
    )
  };
  
  export default RecipeCard;
  