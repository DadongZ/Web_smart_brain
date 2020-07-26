import React from 'react'
import logo from '../../assets/logo.png';
import Tilt from 'react-tilt'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop: '5px'}} src={logo} alt="doubleomics"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
