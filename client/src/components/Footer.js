import React from 'react';
import logo from '../assets/logo-placeholder.png';
import github from '../assets/github-01.png'

const styles = {
    footer: {
        backgroundColor:"white",
        flexShrink:"none"
    },
    logo: {
        height: 75,
        width: 75
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}

const Footer = () => (
    <footer
        id="sticky-footer"
        className="py-4 bg-light text-black-50"
        style={styles.footer}>
        
        <div className="container text-center justify-content-center">
            <img
                src={logo}
                alt="logo"
                loading="lazy"
                style={styles.logo} />
            
            <br /><br />
            
            <small>
                Copyright &copy; William Byrd, Jacci Horvath, Kehong Li & Esteban Meza
            </small> <br />

            <a
                href="https://github.com/wpb911/omegaproject"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={github}
                    alt="github"
                    style={styles.icon} />
            </a>



        </div>
    </footer>
    
        
);

export default Footer;