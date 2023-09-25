import React from 'react';
import Block from '../Block/Block';
import "./Actions.scss"

const Actions = () => {
 const onCopy = () =>{
  alert("Copy")
 }

 const onShow = () =>{
  alert("Show CVV")
 }

  return (
    <div className="Actions">
      <Block  onClick={onCopy}>
        <i className='icon-copy'/>
        <span>COPY CARD NUMBER</span>        
      </Block>
      <Block onClick={onShow}>
        <i className='icon-show'/>
        <span>SHOW CVV</span>
      </Block>
    </div>
  )
}

export default Actions;