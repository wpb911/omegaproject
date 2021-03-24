import React, { Component } from 'react';
import produce from '../produce.json';
import ItemOption from '../ItemOption';
import heart from '../../assets/heart.png';

const styles = {
    heart: {
        maxWidth: 15,
        maxHeight: "auto"
    }
};

class Home extends Component {

    state = {
        produce
    };

    render() {
        return (
            <div className="container mx-auto">

                <form className="text-center mx-auto">
                    <div className="form-row mx-auto">
                            <div className="col-md-5 col-lg-5 col-xl-5 form-group mx-auto">
                                
                                    <select className='form-control' id='all-produce'>
                                        <option id="0">Current Date</option>
                                        <option id="1">January</option>
                                        <option id="2">February</option>
                                        <option id="3">March</option>
                                        <option id="4">April</option>
                                        <option id="5">May</option>
                                        <option id="6">June</option>
                                        <option id="7">July</option>
                                        <option id="8">August</option>
                                        <option id="9">September</option>
                                        <option id="10">October</option>
                                        <option id="11">November</option>
                                        <option id="12">December</option>      
                                    </select>

                            </div>

                            <div className="col-md-5 col-lg-5 col-xl-5 form-group mx-auto">
                                
                                    <select className='form-control' id='all-produce'>
                                        {this.state.produce.map(item => (
                                            <ItemOption
                                                id={item.name}
                                                name={item.name}
                                            />
                                        ))}
                                            
                                    </select>

                            </div>
                        <div className="col-fluid form-group">
                            <span><button className="btn form-group float-right pull-right justify-content-end btn-secondary btn-small">Search</button></span>
                        </div>
                    </div>
                </form>

                
                <div className="row row-cols-1 row-cols-md-3">
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
                            <h5 className="card-title">Apple</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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
                            <h5 className="card-title">Apple</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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
                            <h5 className="card-title">Apple</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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


                    

                </div> 
            </div>
        )
    }
}

export default Home;