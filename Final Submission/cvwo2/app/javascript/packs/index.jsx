// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GoogleButton from 'react-google-button'
import Welcome from 'react-welcome-page'




const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div id='my-container'>
    <Welcome
    loopDuration={3000}
  data={
        [
            {
            "backgroundColor": "#4ed145",
            "imageAnimation": "flipInX",
            "image": require('./../../assets/images/task.png'),
            "text": 'Taskify : Go super minimalist with your ToDo Lists!',
            "textAnimation" : 'bounce',
            "textColor": '#FFFFFF',
            }
        ]
  }
  />
<GoogleButton
  onClick={() => { window.location.href="/auth/google_oauth2" }}
/></div>
    ,
document.body.appendChild(document.createElement('div'))
  )
})
