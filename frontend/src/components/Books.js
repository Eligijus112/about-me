import React, { Component } from 'react';

import Book from './Book';

class Books extends Component {

    state = {
        books: this.props.Books,
        person: this.props.Person
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            books: props.Books,
            person: props.Person
        }
    }

    render(){
        return(
            <div className="Books-list">
                <ul>
                    {this.state.books.map(x =>
                        <Book book = {x} person = {this.state.person} />
                    )}
                </ul>
            </div>
        ) 
    }
}

export default Books;