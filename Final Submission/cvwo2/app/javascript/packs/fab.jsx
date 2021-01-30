import React from "react";
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('hmm')
    const data = node.getAttribute('data')
    ReactDOM.render(
        <a class="btn btn-warning" href='/new' role="button">{data}</a>
        ,
document.body.appendChild(document.createElement('div'))
  )
})