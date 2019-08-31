import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Links extends Component {

    state = {
        Links: this.props.Links || [],
        show_links: false
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            Links: props.Links || []
        }
    }

    show_links() {
        this.setState({ show_links: !this.state.show_links })
    }

    render() {
        return (
            <div className='Links'>
                <div className="ButtonHeader">
                    <Button color='primary' onClick={x => this.show_links()}>
                        Links to related websites
                        </Button>
                </div>
                {this.state.show_links &&
                    this.state.Links.map(x => {
                        return (
                            <a href={x.link_to_social} target='_blank' key={x.link_to_social}>
                                <img src={x.social_img} alt={x.link_to_social} />
                            </a>
                        )
                    })}
            </div>
        )
    }
}

export default Links;