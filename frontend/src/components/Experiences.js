import React, { Component } from 'react';

import Experience from './Experience';
import { CardHeader } from '@material-ui/core';

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
                <CardHeader title = "Proffesional Experiences" />
                    {this.state.all_exp.map(x =>
                        <Experience Experience={x} />
                    )}
            </div>

        )
    }
}

export default Experiences;