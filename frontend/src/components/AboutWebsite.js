import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


class ShortDescription extends Component {

    state = {
        show_info: false
    }

    show_info() {
        this.setState({ show_info: !this.state.show_info })
    }

    render() {
        return (
            <div className='aboutWebsite'>
                <div className="ButtonHeader">
                    <Button color='primary' onClick={x => this.show_info()}>
                        About this website
        </Button>
                </div>

                {this.state.show_info &&
                    <Card>
                        <p> This website is split into two parts: front-end and back-end. Front-end contacts the back-end using API calls (the framework for making the API calls is <span id="exp">axios</span>) and then renders that information.</p>
                        <p> Front-end uses <span id="exp">react</span> (javascript framework),
                back-end uses <span id="exp">django</span> (python framework)
                and the database management system is <span id="exp">postgre</span>. </p>
                        <p> The code is open source and can be found in this <a href="https://github.com/Eligijus112/about-me" target='_blank' rel='noopener noreferrer'>repository</a> </p>
                    </Card>
                }
            </div>
        )
    }
}

export default ShortDescription;