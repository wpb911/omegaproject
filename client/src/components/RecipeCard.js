import React from 'react';


const styles = {
    heart: {
      maxWidth: 15,
      maxHeight: "auto"
      },
      hr: {
          //paddingTop: 15
      }
};
  

const RecipeCard = (props) => {
 
    return (
        <div className="col mb-4">


        <div className="card h-100 text-center">
          <span>
            <a href="#"
              className="badge badge-danger float-right">
              <img src={process.env.PUBLIC_URL + "/assets/heart.png"} style={styles.heart} />
            </a>
          </span>
  
          <img
            src='https://www.edamam.com/web-img/cbd/cbd028f1c51d03c3d9190ebfa19ced2f.jpg'
            className="card-img-top"
            alt={props.title} />
          <div className="card-body">
  
            {
          // }<h5 className="card-title">{foodResult.food? foodResult.food.label:("")}</h5>
          }<h6 className="card-title">
            {/* <a rel="noreferrer noopener"href={"https://en.wikipedia.org/w/api.php?action=opensearch&search="+props.title+"&limit=1&format=json&origin=*"}>{props.title}</a> */}
            Carrots With Caraway And Grapes
          </h6>
              
            <p className="card-text">

            </p>
              <div style={styles.option}>
            <p className="card-text" style={styles.option}>
              <small className="text-muted" style={styles.option}><i>
              6 x carrots(medium), peeled and 1/8-inch sliced on the diagonal<br/>
              4 tbsp Unsalted Butter <br/>
              1/2 tsp Caraway Seeds<br/>
              1/2 tsp Ground Ginger<br/>
              1/4 tsp Dry Mustard<br/>
              1/2 tsp Kosher Salt<br/>
              3 tbsp Light Brown Sugar<br/>
              3/4 cup grapes black or red seedless (halved)
              </i></small></p></div>
            <div className="card-body">
              <a href='http://www.lottieanddoof.com/2009/04/carrots-with-caraway-and-grapes/' className="card-link">
                View Full Recipe
                                          </a>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default RecipeCard;
  