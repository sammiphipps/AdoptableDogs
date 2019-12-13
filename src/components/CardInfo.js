import React from 'react'

const CardInfo = ({dog}) => {
    return (
        <>
            <h3>{dog.name}</h3>
            <img src={dog.image} alt={dog.name} />
            <p>Age: {dog.age}</p> 
        </>       
    )
}

export default CardInfo