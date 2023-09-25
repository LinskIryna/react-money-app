import React from 'react'
import "./BalanceCard.scss"
import Button from '../Button/Button'

const BalanceCard = () => {
  const onClick = () =>{
    alert("Add money")
  }

  return (
    <div className='BalanceCard'>
      <div className='BalanceCard__label'>Current balance</div>
      <div className='BalanceCard__balance'>$70000</div>
      <div className='BalanceCard__info'>
        <div className='BalanceCard__number'>4567890</div>
        <div className='BalanceCard__date'>25/2/2028</div>
      </div>
      <Button
       className="BalanceCard__btn"
       onClick={onClick}
       >Add money</Button>
      
    </div>
  )
}

export default BalanceCard