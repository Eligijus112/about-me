import React, { Component } from 'react';

import Experience from './Experience';

class Experiences extends Component {

    state = {
        all_exp: this.props.Experience
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            all_exp: props.Experience
        }
    }

    render() {
        return (

            <div className="Person-exp">
                <h3> Professional experience </h3>
                <ul>
                    {this.state.all_exp.map(x =>
                        <Experience Experience={x} />
                    )}
                </ul>
            </div>

        )
    }
}

export default Experiences;