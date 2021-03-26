import React, { Component } from 'react';
import Card from '../Card';
import produce from '../produce.json';
import ItemOption from '../ItemOption';



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
                                        <option id="0" href="#">Current Date</option>
                                        <option id="1" href="#">January</option>
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
                                        <option id="0">All Produce</option>
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

                    {this.state.produce.map(item => (
                    <Card
                            id={item.id}
                            title={item.name}
                            select={item.select}
                            heart={item.heart}/>
                    ))}

                   

                    

                </div> 
            </div>
        )
    }
}

export default Home;