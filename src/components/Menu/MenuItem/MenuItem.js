import React from 'react';
import "./MenuItem.scss"

const MenuItem = ({icon, onClick, isActive}) => {
  const cls = isActive ? "MenuItem active" : "MenuItem"

  return (
    <div className={cls} onClick={onClick}>
      <i className={`icon-${icon}`} />
      {isActive && (
        <div className="MenuItem__dot"></div>
      )}
    </div>
  )
}

export default MenuItem