import React, { Component } from 'react';

class Footer extends Component {

    state = {
        Links: this.props.Links || []
    }

    static getDerivedStateFromProps(props, state) {

        return {
            ...state,
            Links: props.Links || []
        }
    }

    render() {
        return (
             <div className='footer'>
                {this.state.Links.map(x => {
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

export default Footer;