import React from 'react'
import DogCard from './DogCard'

const AdoptableDogs = ({dogs, addFavoriteDogs, deleteDogs}) => {

    const renderAdoptableDogs = () => {
        return dogs.map(dog => {
            return <DogCard key={"adoptableDog" + dog.name} dog={dog} dogAction={addFavoriteDogs} deleteDogs={deleteDogs}/>
        })
    }

    return (
        <div className="adoptable-dogs-container">
            <h2>Adoptable Dogs</h2>
            <div className="dogs-container">
                {renderAdoptableDogs()}
            </div>
        </div>
    )
}

export default AdoptableDogs