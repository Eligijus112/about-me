import React from 'react';

// Function to list all the books
export function render_book_list(Books, Person) {
    return (
        <div className="Books-list">
            <h3> Books read by {Person.name} {Person.surname} </h3>
            <ul>
                {Books.map(x =>
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
    )
}
