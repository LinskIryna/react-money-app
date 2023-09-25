import React from 'react';
import Block from '../Block/Block';
import { useState } from 'react';
import MenuItem from './MenuItem/MenuItem';

const menuItemsIcon =[
 "home",
 "balance",
 "stats",
 "message"
]



const Menu = () => {

  const [activeIdx, setActiveIdx] = useState(0);

  const setActive = (idx) => () => setActiveIdx(idx)

  return (
    (
      <Block className="Menu big" >
        {menuItemsIcon.map((item, idx) => (
          <MenuItem
            isActive={idx === activeIdx}
            onClick={setActive(idx)}
            icon={item}
          />
        ))}
      </Block>
    )
  )
}

export default Menu