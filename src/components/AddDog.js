import React, {Component} from 'react';
import CardInfo from './CardInfo'

class AddDog extends Component {
    state = {
        name: "",
        image: "",
        age: 0
    }

    displayFormOutput = () => {
        return (
            <div className="form-output">
                <div className="dog-card">
                    <h2>Form Output</h2>
                    <CardInfo key="form-output-adddog" dog={{name: this.state.name, image: this.state.image, age: this.state.age}}/>
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDog({
            name: this.state.name, 
            image: this.state.image, 
            age: this.state.age
        })
        this.setState({
            name: "",
            image: "",
            age: 0
        })
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name" 
                        type="text"
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="age">Age:</label>
                    <input 
                        id="age" 
                        type="number"
                        name="age" 
                        value={this.state.age}
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="image">Image Url:</label>
                    <input 
                        id="image" 
                        type="text"
                        name="image" 
                        value={this.state.image}
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit">Submit</button>
                </form>  
                {
                    (this.state.name === "" && this.state.image === "" && this.state.age === 0)
                        ?null
                        :this.displayFormOutput()
                }
            </>      
        )
    }
}

export default AddDog