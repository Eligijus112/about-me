import React from 'react';

// Functions for the social media links 
import { render_social } from './social_functions';

// Function for footer rendering
export function render_footer(Links){
    if(Links){
        return (
        <div className='footer'>
            {render_social(Links.instagram, 'instagram')}
            {render_social(Links.github, 'github')}
            {render_social(Links.kaggle, 'kaggle')}
            {render_social(Links.facebook, 'facebook')}
            {render_social(Links.linkedin, 'linkedin')}
        </div>
        )
    }
}