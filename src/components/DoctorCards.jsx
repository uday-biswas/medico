import './DoctorCards.css'
import React, { useState } from 'react';

function DoctorCards({ id, name, speciality, experience, rating, image, description, remove }) {

    const [readMore, setReadMore] = useState(false);

    const readClick = () => {
        setReadMore(!readMore);
    }

    let info = '';
    if (description.length > 50) {
        info = readMore ? `${description}` : `${description.substring(0, 50)}...`;
    }
    else {
        info = readMore ? `${description}` : `${description}...`;
    }

    return (
        <div className="doctor_cards">
            <div className="doctor_image">
                <img src={image} alt="doctor_image" />
            </div>
            <div>
                <div className="doctor_details">{name}</div>
                <div className="doctor_details">Speciality - {speciality}</div>
                <div className="doctor_details">Experience - {experience} years</div>
                <div className="doctor_details">Rating - {rating} Stars</div>
                <div className="doctor_details">Description - {info}<span className='read' onClick={readClick}>{readMore ? 'show less' : 'read more'}</span></div>
                <div className="doctor_details"><button onClick={() => remove(id)}>Remove</button></div>
            </div>
        </div>
    )
}

export default DoctorCards;