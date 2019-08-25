import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Book extends Component {

    state = {
        title: this.props.book.title,
        book_cover: this.props.book.book_cover,
        author: this.props.book.author,
        name: this.props.person.name,
        user_rating: this.props.book.user_rating,
        user_description: this.props.book.user_description
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            title: props.book.title,
            book_cover: props.book.book_cover,
            author: props.book.author,
            name: props.person.name,
            user_rating: props.book.user_rating,
            user_description: props.book.user_description
        }
    }

    render() {
        return (
            <li key={this.state.title} className="Book-entry">
                <Card>
                    <Typography>
                        <div className='bookCover'>
                            <img src={this.state.book_cover} alt='Book_cover'></img>
                        </div>
                        <p>
                            <span id="exp">Title</span>: {this.state.title}
                        </p>
                        <p>
                            <span id="exp">Author</span>: {this.state.author}
                        </p>
                        <p>
                            <span id="exp"> {this.state.name} rating </span>: {this.state.user_rating} / 10
                                </p>
                        <p>
                            <span id="exp"> {this.state.name} description</span>: {this.state.user_description}
                        </p>
                    </Typography>
                </Card>
            </li>
        )
    }
}

export default Book;