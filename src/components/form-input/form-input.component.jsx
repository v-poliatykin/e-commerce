import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label, value, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' {...otherProps} value={value}/>
        {
            label && (
                <label className={`${value ? 'shrink': ''} form-input-label`}>
                    {label}
                </label>
            )
        }
    </div>
);

export default FormInput;