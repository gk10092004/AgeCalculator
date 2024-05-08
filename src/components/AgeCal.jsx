import React from 'react'
import Arrow from '../assets/icon-arrow.svg'

const AgeCal = () => {
  return (
    <div>
        <div>
            <div className="div1">
                    <div>
                        <label htmlFor="day">DAY</label>
                        <input type="number" name='day' />
                    </div>
                    <div>
                        <label htmlFor="month">MONTH</label>
                        <input type="number" name='month' />
                    </div>
                    <div>
                        <label htmlFor="year">YEAR</label>
                        <input type="number" name='year' />
                    </div>
            </div>
            <div className="div2">
                <hr />
                <button><img src={Arrow} alt="" /></button>
            </div>
            <div className="div3">
                <span>- -</span>
                <h1>years</h1>
            </div>
            <div className="div4">
                <span>- -</span>
                <h1>months</h1>
            </div>
            <div className="div5">
                <span>- -</span>
                <h1>days</h1>
            </div>
        </div>
    </div>
  )
}

export default AgeCal