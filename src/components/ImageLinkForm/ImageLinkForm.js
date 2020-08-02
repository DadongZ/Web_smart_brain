import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Majic Brain will recognize the face in your pictures. Paste your picture.'}
            </p>
            <div className="form center pa4 br3">
                <input  className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className='w-30 grow f3 link ph2 pv1 dib white bg-purple pointer'
                        onClick={onButtonSubmit}>
                        Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;
