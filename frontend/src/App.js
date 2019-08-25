// Basic packages importing 
import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './App.css';

// Rendering functions for page elements
import { render_footer } from './page_elements.js'

// Rendering functions for the books tab
import { render_book_list } from './tabs/books';

// Functions for the tab navigation
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Importing components
import ShortDescription from './components/ShortDescription'
import Experiences from './components/Experiences'

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
    console.log(this.state.Person)
    return (

      <Tabs>
        <TabList>
          <Tab>About me</Tab>
          <Tab>Books</Tab>
        </TabList>

        <TabPanel>
          <div className="Person">
            
            <ShortDescription Person = {this.state.Person} />
            <Experiences Experience = {this.state.Experience} />

          </div>
          {render_footer(this.state.Links)}
        </TabPanel>

        <TabPanel>
          <div className="Books">
            {render_book_list(this.state.Books, this.state.Person)}
          </div>  
            {render_footer(this.state.Links)}
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
