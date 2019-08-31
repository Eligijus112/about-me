import React, { Component } from 'react';

import Experience from './Experience';
import Button from '@material-ui/core/Button';


class Experiences extends Component {

    state = {
        all_exp: this.props.Experience,
        show_experience: false
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            all_exp: props.Experience
        }
    }

    show_experience() {
        this.setState({ show_experience: !this.state.show_experience })
    }

    render() {
        return (
            <div className="Person-exp">
                <div className="ButtonHeader">
                    <Button color='primary' onClick={x => this.show_experience()}>
                        Professional experience
                        </Button>
                </div>
                {this.state.show_experience &&
                    this.state.all_exp.map((x, i) =>
                        <div className='Person-exp-entry' key={i}>
                            <Experience Experience={x} />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Experiences;