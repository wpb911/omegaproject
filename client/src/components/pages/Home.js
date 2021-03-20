import React, { Component } from 'react';
import produce from '../produce.json';
import ItemOption from '../ItemOption';


class Home extends Component {

    state = {
        produce
    };

    render() {
        return (
            <div className="container-sm container-md container-lg container-xl">
                <div className="form-row justify-content-center">
                    <form className="justify-content-center text-center">
                        <div className="col mx-auto">
                            <div className='form-group dropdown'>
                                <select className='form-control' id='all-produce'>
                                    {this.state.produce.map(item => (
                                        <ItemOption
                                            id={item.name}
                                            name={item.name}
                                        />
                                    ))}
                                        
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
        
    
}

export default Home;