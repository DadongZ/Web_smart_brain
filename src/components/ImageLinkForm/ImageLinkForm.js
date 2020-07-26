import React from 'react'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Majic Brain will recognize the face in your pictures. Paste your picture.'}
            </p>
            <div className="center">
                <input  className='f4 pa2 w-70 center' type='tex'/>
                <button className='w-10 grow f3 link ph2 pv1 dib white bg-purple pointer'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;
