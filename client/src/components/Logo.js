import React from 'react';
import logo from '../assets/ripe-01.png';


const styles = {
    logo: {
        marginBottom: 50,
        marginTop: 25,
        maxWidth: 300
    }
}

const Logo = () => (
    <div className="container mx-auto text-center">
        <img className='img-fluid' src={logo} alt='ripe' style={styles.logo} />
        </div>
)
export default Logo;