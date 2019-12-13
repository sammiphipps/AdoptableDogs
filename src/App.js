import React, {Component} from 'react';
import './App.css';

import AdoptableDogs from './components/AdoptableDogs'
import FavoriteDogs from './components/FavoriteDogs'
import AddDog from './components/AddDog'

class App extends Component {

  state = {
    dogs: [
      {
        name: "Cooper",
        image: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
        age: 2
      },
      {
        name: "Max",
        image: "https://www.purina.com.au/-/media/Project/Purina/Main/Breeds/Dog/Dog_Siberian-Husky_Desktop.jpg?h=475&la=en&w=825&hash=B2B86CD3D2D85392DB3948A07E63FB09",
        age: 7
      },
      {
        name: "Lucy",
        image: "http://files.alfresco.mjh.group/alfresco_images/DVM360//2019/02/27/c23624de-1b4c-4e61-961f-db10dcf27341/veterinary-black-puppy-licking-wood-AdobeStock_211167675-450.jpg",
        age: 1
      },
      {
        name: "Bailey",
        image: "https://www.tailwaggerphoto.com/wp-content/uploads/2019/10/Tailwagger-Dog-Photography-56747-1800x1200_c.jpg",
        age: 4
      }
    ],
    favoriteDogs: [],
  }

  filterArrayBefore = (array, objectBefore) => {
    return array.filter(dog => dog < objectBefore)
  }

  filterArrayAfter = (array, objectAfter) => {
    return array.filter(dog => dog > objectAfter)
  }

  filterArray = (array, objectNotInclude) => {
    return array.filter(dog => dog !== objectNotInclude)
  }

  addFavoriteDogs = (dog) => {
    if(!this.state.favoriteDogs.includes(dog)){
      this.setState({favoriteDogs: [...this.state.favoriteDogs, dog]})
    }
  }

   removeFavoriteDogs = (dog) => {
      if(this.state.favoriteDogs.includes(dog)){
        const filteredFavoriteDogs = this.filterArray(this.state.favoriteDogs, dog)
        this.setState({favoriteDogs: filteredFavoriteDogs})
      }
   }

  addDog = (dog) => {
    this.setState({dogs: [...this.state.dogs, dog]})
  }

  deleteDog = (dog) => {
    const filteredDogArray = this.filterArray(this.state.dogs, dog)
    this.setState({dogs: filteredDogArray})
    if(this.state.favoriteDogs.includes(dog)){
      const filteredFavoriteDogArray = this.filterArray(this.state.favoriteDogs, dog)
      this.setState({favoriteDogs: filteredFavoriteDogArray})
     }
  }

  render(){
    return (
      <div className="App">
        <AddDog key="1" addDog={this.addDog}/>
        {
          (this.state.favoriteDogs.length !== 0)
            ?<FavoriteDogs 
                key="2" 
                dogs={this.state.favoriteDogs} 
                removeFavoriteDogs={this.removeFavoriteDogs} 
                deleteDogs={this.deleteDog}
              />
            :null
        }
        <AdoptableDogs 
          key="3" 
          dogs={this.state.dogs} 
          addFavoriteDogs={this.addFavoriteDogs} 
          deleteDogs={this.deleteDog}
        />
      </div>
    )
  }
}

export default App;
