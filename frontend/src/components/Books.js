import React, { Component } from 'react';

import Book from './Book';

class Books extends Component {

    state = {
        books: this.props.Books,
        person: this.props.Person
    }

    static getDerivedStateFromProps(props, state) {
        document.title = props.Person.name + " " + props.Person.surname + " Book list";
        return {
            ...state,
            books: props.Books,
            person: props.Person
        }
    }

    render() {
        return (
            <div className="Books-list">
                {this.state.books.map((x, i) =>
                    <div className='Book-entry' key={i}>
                        <Book book={x} person={this.state.person} />
                    </div>
                )}
            </div>
        )
    }
}

export default Books;