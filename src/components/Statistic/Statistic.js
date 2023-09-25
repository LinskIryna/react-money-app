import React from 'react';
import "./Statistic.scss";
import IconButton from '../IconButton/IconButton';
import CircleStatistic from '../CircleStatistic/CircleStatistic';
import { useEffect, useState } from 'react';

const Statistic = () => {

  const [percentLeft, setPercentLeft] = useState(0)
  const [percentRight, setPercentRight] = useState(0)

  useEffect(() => {
    const getPercent = (percent) => percent === 100 ? 0 : percent + 1
    const leftInterval = setInterval(() => {
      setPercentLeft(getPercent)
    }, 100)
    const rightInterval = setInterval(() => {
      setPercentRight(getPercent)
    }, 100)


    return () => {
      clearInterval(leftInterval)
      clearInterval(rightInterval)
    }
  }, [])

  const onShare = () => {
    alert('ON SHARE')
  }

  return (
    <div className='Statistic'>
      <div className="Statistic__label">YOUR MONEY</div>
      <div className='Statistic__2col'>
        <div className='Statistic__balance'>$898.00</div>
        <IconButton icon="share" onClick={onShare}/>
      </div>

      <div className='Statistic__2col'>

        <CircleStatistic 
          label='last month'
          percent ={percentLeft}
          disabled
        >$208.00</CircleStatistic>

        <CircleStatistic
        label='this month'
        percent={percentRight}
        >$305.00</CircleStatistic>

      </div>
    </div>
  )
}

export default Statistic