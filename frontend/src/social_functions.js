import React from 'react';

// Importing logos
import linkedin_logo from './media/linkedin-icon.png'
import instagram_logo from './media/instagram-icon.png'
import kaggle_logo from './media/kaggle-icon.png'
import github_logo from './media/github-icon.png'
import facebook_logo from './media/facebook-icon.png'

export function render_social(href, logo){
    if(href){

        var logo_to_render = ''

        if(logo==='linkedin'){
            logo_to_render = linkedin_logo
        }

        if(logo==='instagram'){
            logo_to_render = instagram_logo
        }

        if(logo==='kaggle'){
            logo_to_render = kaggle_logo
        }

        if(logo==='github'){
            logo_to_render = github_logo
        }

        if(logo==='facebook'){
            logo_to_render = facebook_logo
        }

      return <a href={href} target='_blank'>
              <img src={logo_to_render} alt={logo} />;
              </a>
    }
  } 