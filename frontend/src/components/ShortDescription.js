import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


class ShortDescription extends Component {

    state = {
        caption: this.props.Person.caption,
        name: this.props.Person.name,
        surname: this.props.Person.surname,
        profile_image: this.props.Person.profile_image,
        email: this.props.Person.email,
        phone: this.props.Person.phone,
        country: this.props.Person.country,
        city: this.props.Person.city,
        date_of_birth: this.props.Person.date_of_birth,
        age: this.props.Person.age,
        short_description: this.props.Person.short_description,
        show_description: false
    }

    static getDerivedStateFromProps(props, state) {
        document.title = props.Person.name + " " + props.Person.surname + " | " + props.Person.caption;
        return {
            ...state,
            caption: props.Person.caption,
            name: props.Person.name,
            surname: props.Person.surname,
            profile_image: props.Person.profile_image,
            email: props.Person.email,
            phone: props.Person.phone,
            country: props.Person.country,
            city: props.Person.city,
            date_of_birth: props.Person.date_of_birth,
            age: props.Person.age,
            short_description: props.Person.short_description
        }
    }

    show_description(){
        this.setState({show_description: !this.state.show_description})
    }

    render() {
        return (
            <div className='Person-short-desc'>
                <div className="Person-header">
                    <Card>
                        <h2>{this.state.name} {this.state.surname} | {this.state.caption}</h2>
                    </Card>
                </div>
                <div className='Person-info'>
                    <Card>
                        <img src={this.state.profile_image} alt='User'></img>
                        <p>
                            <span id="exp">Email:</span> {this.state.email}
                        </p>
                        <p>
                            <span id="exp">Phone:</span> {this.state.phone}
                        </p>
                        <p>
                            <span id="exp">Country:</span> {this.state.country}
                        </p>
                        <p>
                            <span id="exp">City:</span> {this.state.city}
                        </p>
                        <p>
                            <span id="exp">Date of Birth:</span> {this.state.date_of_birth}
                        </p>
                        <p>
                            <span id="exp">Age:</span> {this.state.age}
                        </p>
                    </Card>
                </div>
                <div className="Person-desc">
                    <div className="ButtonHeader">
                        <Button color='primary' onClick={x => this.show_description()}>
                            About me
                        </Button>
                    </div>
                    {this.state.show_description && 
                        <Card display="block">
                            {this.state.short_description}
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default ShortDescription;