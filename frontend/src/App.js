import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  // Setting the initial state of person
  state = {
    Person: []
  };

  // Initializing the getPerson method 
  componentDidMount(){
    this.getPerson()
  }

  // Downloading a specific user data 
  getPerson(){
    axios
    .get('http://127.0.0.1:8000/api/1/')
    .then(res => {
      this.setState({Person: res.data})
    })
  }

  render() {
    return (
      <div className="Person">
        
        <div className="Person-header">
          <h2>Curriculum vitae</h2>
          <h3>{this.state.Person.name} {this.state.Person.surname}</h3>
        </div>

        <div className='Person-info'>
          <p>
            Country: {this.state.Person.country} 
          </p>
          
          <p>
            City: {this.state.Person.city}
          </p>

          <p>
            Date of Birth: {this.state.Person.date_of_birth}
          </p>

          <p> 
            Age: {this.state.Person.age}
          </p>  
        </div>
        <p className="Person-desc">
          {this.state.Person.short_description}
        </p>
      </div>
    );
  }
}

export default App;
