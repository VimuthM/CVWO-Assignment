import React from "react";
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('wah')
  const data = node.getAttribute('data')
  const link = node.getAttribute('link')
  const body = node.getAttribute('body')
  const tag = node.getAttribute('tag')

  ReactDOM.render(
    <div class="card">
    <h5 class="card-header">{data}</h5>
    <div class="card-body">
      <h5 class="card-title">{body}</h5>
      <button type="button" class="btn btn-outline-success">{tag}</button>
      <a href={link} class="btn btn-primary">Go to ={">"}</a>
    </div>
  </div>
    ,
document.body.appendChild(document.createElement('div'))
  )
})
