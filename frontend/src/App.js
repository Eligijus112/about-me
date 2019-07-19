// Basic packages importing 
import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './App.css';

// Functions for the social media links 
import { render_social } from './social_functions';

// Functions for the tab navigation
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
  componentDidMount() {
    if (this.id == null) {
      this.id = 1
    }
    this.getPerson()
    this.getExperience()
    this.getLinks()
  }

  // Downloading a specific user data 
  getPerson() {
    axios
      .get("http://127.0.0.1:8000/api/" + this.id + "/")
      .then(res => {
        this.setState({ Person: res.data })
      })
  }

  // Downloading data regarding experience
  getExperience() {
    axios
      .get("http://127.0.0.1:8000/api/experience?user_id=" + this.id)
      .then(res => {
        this.setState({ Experience: res.data })
      })
  }

  // Downloading links (social media) about a person
  getLinks() {
    axios
      .get("http://127.0.0.1:8000/api/links?user_id=" + this.id)
      .then(res => {
        this.setState({ Links: res.data[0] })
      })
  }

  render() {
    return (
      <Tabs horizontal>
        <TabList>
          <Tab>About me</Tab>
          <Tab>Books</Tab>
        </TabList>

        <TabPanel>
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
              <ul>
                {this.state.Experience.map(x =>

                  <li key={x.title + x.firm} className="Person-exp-entry">
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
                )}
              </ul>
            </div>

            <div className='footer'>
              {render_social(this.state.Links.instagram, 'instagram')}
              {render_social(this.state.Links.github, 'github')}
              {render_social(this.state.Links.kaggle, 'kaggle')}
              {render_social(this.state.Links.facebook, 'facebook')}
              {render_social(this.state.Links.linkedin, 'linkedin')}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Books">
            <div className='footer'>
              {render_social(this.state.Links.instagram, 'instagram')}
              {render_social(this.state.Links.github, 'github')}
              {render_social(this.state.Links.kaggle, 'kaggle')}
              {render_social(this.state.Links.facebook, 'facebook')}
              {render_social(this.state.Links.linkedin, 'linkedin')}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
