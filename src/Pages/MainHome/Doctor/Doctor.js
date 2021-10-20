import React from 'react';

const Doctor = ({doctor}) => {
    const {name, img, age, title} = doctor
    return (
        <div className='col-md-4 mt-2'>
            <img className='w-75' src={img} alt="" />
            <h3>{name}</h3>
            <h5>{title}</h5>
            <h5>age: {age}</h5>
        </div>
    );
};

export default Doctor;