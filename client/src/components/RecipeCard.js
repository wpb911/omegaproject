import React from 'react';


const styles = {
    heart: {
      maxWidth: 15,
        maxHeight: "auto",
      
      },
    img: {
        maxHeight: 250,
        maxWidth: "auto"
    },
    expand: {
        maxWidth: 13,
        maxHeight: "auto",
        marginLeft: 10
    },
    badge: {
        marginRight: 5,
        marginBottom: 5
    },
};
  

const RecipeCard = ({ recipe }) => {
 
    return (

        <div className="card mb-3">
            <div className="row no-gutters">
                
                <div className="col-md-4 col-fluid text-center">
                    
                    <img src="https://www.edamam.com/web-img/cbd/cbd028f1c51d03c3d9190ebfa19ced2f.jpg" alt="..." className="img-fluid" style={styles.img}/>
    </div>
                <div className="col-md-8 col-fluid">
            
                    <div className="card-body">

        <h5 className="card-title">Carrots With Caraway And Grapes</h5>
        <p className="card-text"><small className="text-muted"><i>
              6 x carrots(medium), peeled and 1/8-inch sliced on the diagonal,
              4 tbsp Unsalted Butter,
              1/2 tsp Caraway Seeds,
              1/2 tsp Ground Ginger,
              1/4 tsp Dry Mustard,
              1/2 tsp Kosher Salt,
              3 tbsp Light Brown Sugar,
              3/4 cup grapes black or red seedless (halved)
              </i></small></p>
        <p className="card-text"><a href='http://www.lottieanddoof.com/2009/04/carrots-with-caraway-and-grapes/' target="_blank" className="card-link">
                            View Full Recipe
                                         
                            <span>
                          <img
                              src={process.env.PUBLIC_URL + '/assets/resize.png'}
                              alt='Open in new tab'
                              style={styles.expand}/>
                      </span></a>
                                          </p>
                    </div>
                    <div className="card-bottom">
                    <span>
             <a href="#" style={styles.badge}
              className="badge badge-danger float-right">
              <img src={process.env.PUBLIC_URL + "/assets/heart.png"} style={styles.heart} />
            </a>
          </span>
  
          <img
            src={recipe.image}
            className="card-img-top"
            alt={recipe.label} />
          <div className="card-body">
  
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
              <small className="text-muted" style={styles.option}>
                {recipe.ingredientLines.map(ingredient =>{
                  return <li>{ingredient}</li>
                })}
                {/* <i>
              6 x carrots(medium), peeled and 1/8-inch sliced on the diagonal<br/>
              4 tbsp Unsalted Butter <br/>
              1/2 tsp Caraway Seeds<br/>
              1/2 tsp Ground Ginger<br/>
              1/4 tsp Dry Mustard<br/>
              1/2 tsp Kosher Salt<br/>
              3 tbsp Light Brown Sugar<br/>
              3/4 cup grapes black or red seedless (halved)
              </i> */}
              </small></p></div>
            <div className="card-body">
              <a href={recipe.url} className="card-link">
                View Full Recipe
                                          </a>

                        </div>
                </div>
                
            </div>
            
</div>
    )
  };
  
  export default RecipeCard;
  