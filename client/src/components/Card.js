import React from 'react';

const Card = (props) => {
    return (
<div className="col mb-4">
                        <div className="card h-100 text-center">
                                <span>
                                <a href="#"
                                    className="badge badge-danger float-right">
                                    <img src={heart} style={styles.heart} />
                                </a>
                                </span>

                                <img
                                    src="https://www.cmiapples.com/ecom_img/original-6-38-jonagold-apples.jpg"
                                    className="card-img-top"
                                    alt="apple" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">
                                        {props.select}
                                    </p>

                                    <p className="card-text">
                                        <small className="text-muted">
                                            Nutritional Value: <br />
                                        Calories: 100
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

