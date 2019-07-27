import React from 'react';

// Function for short person description
export function render_short_desc(Person) {
    if (Person) {
        return (
            <div className='Person-short-desc'>
                <div className="Person-header">
                    <h2>{Person.name} {Person.surname} | {Person.caption}</h2>
                </div>

                <div className='Person-info'>
                    <img src={Person.profile_image} alt='User'></img>
                    <p>
                        Email: {Person.email}
                    </p>
                    <p>
                        Phone: {Person.phone}
                    </p>
                    <p>
                        Country: {Person.country}
                    </p>
                    <p>
                        City: {Person.city}
                    </p>
                    <p>
                        Date of Birth: {Person.date_of_birth}
                    </p>
                    <p>
                        Age: {Person.age}
                    </p>
                </div>

                <div className="Person-desc">
                    <h3> About me </h3>
                    {Person.short_description}
                </div>
            </div>
        )
    }
}

// Function for listing experience
export function render_experience(Experience) {
    if (Experience) {
        return (
            <div className="Person-exp">
                <h3> Professional experience </h3>
                <ul>
                    {Experience.map(x =>
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
                                <span id="exp">Job description</span>: {x.description}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}