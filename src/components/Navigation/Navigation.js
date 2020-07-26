import React from 'react';
import logo from '../../assets/logo.png';
import Tilt from 'react-tilt';

const Navigation = () => {
    return (
        //navigation 'Sign Out' on top right
        //import tachyons for styling inside className
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={logo} alt="DoubleOmics" width="100" height="100"/>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;