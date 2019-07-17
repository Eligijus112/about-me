import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './App.css';

// Extracting the GET parameters
const query_parameter = queryString.parse(location.search);
const user_id = query_parameter.user_id;

class App extends Component {

  id = user_id;

  // Setting the initial state of person
  state = {
    Person: [],
    Experience: []
  };

  // Initializing the getPerson method 
  componentDidMount(){
    if(this.id == null){
      this.id = 1
    }
    this.getPerson()
    this.getExperience()
  }

  // Downloading a specific user data 
  getPerson(){
    axios
    .get("http://127.0.0.1:8000/api/" + this.id + "/")
    .then(res => {
      this.setState({Person: res.data})
    })
  }

  // Downloading data regarding experience
  getExperience(){
    axios
    .get("http://127.0.0.1:8000/api/experience?user_id=" + this.id)
    .then(res => {
      this.setState({Experience: res.data})
    })
  }

  render() {
    return (
      <div className="Person">
        
        <div className="Person-header">
          <h2>{this.state.Person.name} {this.state.Person.surname} | {this.state.Person.caption}</h2>
        </div>

        <div className='Person-info'>
          <img src={this.state.Person.profile_image} alt='User'></img>

          <p>
            Email: {this.state.Person.email} 
          </p>

          <p>
            Phone: {this.state.Person.phone} 
          </p>

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

        <div className="Person-desc">
          <h3> About me </h3>
          {this.state.Person.short_description}
        </div>

        <div className='footer'>
        </div>

      </div>
    );
  }
}

export default App;
