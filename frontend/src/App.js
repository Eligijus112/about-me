import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './App.css';

// Import social websites logos for the footer
import instagram_logo from './instagram-icon.png'
import kaggle_logo from './kaggle-icon.png'
import github_logo from './github-icon.png'
import facebook_logo from './facebook-icon.png'
import linkedin_logo from './linkedin-icon.png'


// Extracting the GET parameters
const query_parameter = queryString.parse(location.search);
const user_id = query_parameter.user_id;

class App extends Component {

  id = user_id;

  // Setting the initial state of person
  state = {
    Person: [],
    Experience: [],
    Links: []
  };

  // Initializing the getPerson method 
  componentDidMount(){
    if(this.id == null){
      this.id = 1
    }
    this.getPerson()
    this.getExperience()
    this.getLinks()
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

  // Downloading links (social media) about a person
  getLinks(){
    axios
    .get("http://127.0.0.1:8000/api/links?user_id=" + this.id)
    .then(res => {
      this.setState({Links: res.data[0]})
    })
  }

  render() {
    console.log(this.state.Links.instagram)
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

        <div className="Person-exp">
          <h3> Professional experience </h3>
          {this.state.Experience.map(x =>
          <ul> 
            <li className="Person-exp-entry"> 
              <p>
                <span id="exp">Title</span>: {x.title}
              </p>

              <p>
                <span id="exp">Workplace</span>: {x.firm}
              </p>

              <p>
                <span id="exp">Time frame</span>: {x.start_date} - {x.end_date}
              </p>

              <p>
                <span id="exp"> Months of experience </span>: {x.months_in_job}
              </p>

              <p>
                <span id="exp">Job description</span>:

                {x.description}
              </p>  
            </li> 
          </ul>  
          )}
        </div>

        <div className='footer'>
          <a href={this.state.Links.instagram} target='_blank'>
            <img src={instagram_logo} alt="instagram logo" />;
          </a>

          <a href={this.state.Links.github} target='_blank'>
            <img src={github_logo} alt="github logo" />;
          </a>

          <a href={this.state.Links.kaggle} target='_blank'>
            <img src={kaggle_logo} alt="kaggle logo" />;
          </a>

          <a href={this.state.Links.facebook} target='_blank'>
            <img src={facebook_logo} alt="facebook logo" />;
          </a>

          <a href={this.state.Links.linkedin} target='_blank'>
            <img src={linkedin_logo} alt="linkedin logo" />;
          </a>
        </div>
          
      </div>
    );
  }
}

export default App;
