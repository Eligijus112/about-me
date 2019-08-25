import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Experience extends Component {

    state = {
        title: this.props.Experience.title,
        firm: this.props.Experience.firm,
        start_date: this.props.Experience.start_date,
        end_date: this.props.Experience.end_date,
        months_in_job: this.props.Experience.months_in_job,
        description: this.props.Experience.description
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            title: props.Experience.title,
            firm: props.Experience.firm,
            start_date: props.Experience.start_date,
            end_date: props.Experience.end_date,
            months_in_job: props.Experience.months_in_job,
            description: props.Experience.description
        }
    }

    render() {
        return (
            <li key={this.state.title + this.state.firm} className="Person-exp-entry">
                <Card>
                    <Typography>
                    <p>
                        <span id="exp">Title</span>: {this.state.title}
                    </p>
                    <p>
                        <span id="exp">Workplace</span>: {this.state.firm}
                    </p>
                    <p>
                        <span id="exp">Time frame</span>: {this.state.start_date} - {this.state.end_date}
                    </p>
                    <p>
                        <span id="exp">Months of experience </span>: {this.state.months_in_job}
                    </p>
                    <p>
                        <span id="exp">Job description</span>: {this.state.description}
                    </p>
                    </Typography>
                </Card>
            </li>
        )
    }
}

export default Experience;