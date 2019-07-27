// Basic packages importing 
import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './App.css';

// Functions for the social media links 
import { render_footer } from './page_elements';

// Functions for the tab navigation
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Extracting the GET parameters
const query_parameter = queryString.parse(window.location.search);
const user_id = query_parameter.user_id;

// Loading .env parameters
const host_site = process.env.REACT_APP_HOST_SITE


class App extends Component {

  id = user_id;

  // Setting the initial state of person
  state = {
    Person: [],
    Experience: [],
    Links: [],
    Books: []
  };

  // Sending requests to API
  componentDidMount() {
    if (this.id == null) {
      this.id = 1
    }

    this.getPerson()
    this.getExperience()
    this.getLinks()
    this.getBooks()
  }

  // Downloading a specific user data 
  getPerson() {
    axios
      .get("http://" + host_site + ":8000/api/" + this.id + "/")
      .then(res => {
        this.setState({ Person: res.data })
      })
  }

  // Downloading data regarding experience
  getExperience() {
    axios
      .get("http://" + host_site + ":8000/api/experience/?user_id=" + this.id)
      .then(res => {
        this.setState({ Experience: res.data })
      })
  }

  // Downloading links (social media) about a person
  getLinks() {
    axios
      .get("http://" + host_site + ":8000/api/links/?user_id=" + this.id)
      .then(res => {
        this.setState({ Links: res.data[0] })
      })
  }

  // Downloading the book list of a user
  getBooks() {
    axios
      .get("http://" + host_site + ":8000/api/books/?user_id=" + this.id)
      .then(res => {
        this.setState({ Books: res.data })
      })
  }

  render() {
    console.log(process.env.REACT_APP_HOST_SITE)
    return (

      <Tabs>
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
            {render_footer(this.state.Links)}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Books">

            <div className="Books-list">
              <h3> Books read by {this.state.Person.name} {this.state.Person.surname} </h3>
              <ul>
                {this.state.Books.map(x =>

                  <li key={x.title + x.firm} className="Book-entry">
                    <div className='bookCover'>
                      <img src={x.book_cover} alt='Book_cover'></img>
                    </div>
                    <p>
                      <span id="exp">Title</span>: {x.title}
                    </p>

                    <p>
                      <span id="exp">Author</span>: {x.author}
                    </p>

                    <p>
                      <span id="exp"> {this.state.Person.name} rating </span>: {x.user_rating} / 10
                    </p>

                    <p>
                      <span id="exp"> {this.state.Person.name} description</span>: {x.user_description}
                    </p>
                  </li>
                )}
              </ul>
            </div>
            {render_footer(this.state.Links)}
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
