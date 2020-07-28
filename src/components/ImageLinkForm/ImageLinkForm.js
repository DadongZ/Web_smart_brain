import React from 'react'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Majic Brain will recognize the face in your pictures. Paste your picture.'}
            </p>
            <div className="center">
                <input  className='f4 pa2 w-30 center' type='tex' onChange={onInputChange}/>
                <button className='w-10 grow f3 link ph2 pv1 dib white bg-purple pointer'
                        onClick={onButtonSubmit}>
                        Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;
