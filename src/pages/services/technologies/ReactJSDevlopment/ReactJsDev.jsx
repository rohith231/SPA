import React from 'react'

function ReactDevCard(props) {
  return (
    <div className={props.bg ? "" : ''}>
    <div className={props.bg ? "icon white-icon" : "icon"}><div className={props.icon} /></div>
    <h5 className={props.bg ? "heading5 white-h5" : "heading5"}>{props.title}</h5>
    <p className={props.bg ? "card-para white-p" : "text"}>{props.content}</p>
</div>
    )
    }

export default ReactDevCard