import React from 'react';
import hero from '../assets/produce.png'


const styles = {
    hero: {
        marginBottom: 25
    }
}
const Hero = () => (
    <img className='hero img-fluid' src={hero} alt='produce' style={styles.hero} />
);

export default Hero;