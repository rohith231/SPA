import React from 'react'

function MobDevCard(props) {
  return (
    <div className={props.bg ? "card-container blue" : 'card-container'}>
        <div className={props.bg ? "icon white-icon" : "icon"}><div className={props.icon} /></div>
        <h5 className={props.bg ? "heading5 white-h5" : "heading5"}>{props.title}</h5>
        <p className={props.bg ? "card-para white-p" : "card-para"}>{props.content}</p>
    </div>
    )
    }

export default MobDevCard