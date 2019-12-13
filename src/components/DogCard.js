import React from 'react'
import CardInfo from './CardInfo'

const DogCard = ({dog, dogAction, deleteDogs}) => {

    const handleDeleteClick = (event) => {
        deleteDogs(dog)
    }

    const handleClick = (event) => {
        dogAction(dog)
    } 

    return (
        <div className="dog-card">
            <div className="button-container">
                <button className="deleteButton" onClick={handleDeleteClick}>
                    <span>X</span>
                </button>
            </div>
            <div onClick={handleClick}>
                <CardInfo key={"card" + dog.name} dog={dog} />
            </div>
        </div>
    )
}

export default DogCard