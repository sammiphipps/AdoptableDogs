import React from 'react'
import DogCard from './DogCard'

const FavoriteDogs = ({dogs, removeFavoriteDogs, deleteDogs}) => {
    const renderFavoriteDogs = () =>{
        return dogs.map(dog => {
            return <DogCard key={"favoiteDog" + dog.name} dog={dog} dogAction={removeFavoriteDogs} deleteDogs={deleteDogs}/>
        })
    }

    return (
        <div className="favorite-dogs-container">
            <h2>Favorite Dogs</h2> 
            <div className="dogs-container">
                {renderFavoriteDogs()}
            </div>
        </div>
    )
}

export default FavoriteDogs