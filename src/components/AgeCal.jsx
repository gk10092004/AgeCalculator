import React from 'react'
import Arrow from '../assets/icon-arrow.svg'

const AgeCal = () => {
  return (
    <div className='bg-[#ffffff] p-[2rem] rounded-br-[10rem] '>
        <div className=' rounded-br-[9rem] flex flex-col gap-[0.2rem]' >
            <div className="div1 flex gap-[2.5rem] ">
                    <div className='flex flex-col  items-start w-[8rem]   ' >
                        <label htmlFor="day" className='mb-[0.3rem] font-semibold ' >DAY</label>
                        <input type="number" name='day' className='box text-[2.7rem] font-bold pl-[0.5rem] border border-[0.1rem]  border-[#dbdbdb]  ' placeholder='DD' />
                        <i className='text-[0.9rem]' >This field is required</i>
                    </div>
                    <div className='flex flex-col   items-start w-[10rem] ' >
                        <label htmlFor="month" className='mb-[0.3rem] font-semibold ' >MONTH</label>
                        <input type="number" name='month' className='box text-[2.7rem] font-bold pl-[0.5rem] border border-[0.1rem]  border-[#dbdbdb]' placeholder='MM'  />
                        <i className='text-[0.9rem]' >This field is required</i>
                    </div>
                    <div className='flex flex-col  items-start w-[8rem] ' >
                        <label htmlFor="year" className='mb-[0.3rem] font-semibold ' >YEAR</label>
                        <input type="number" name='year' className='box text-[2.7rem] font-bold pl-[0.5rem] border border-[0.1rem]  border-[#dbdbdb] ' placeholder='YYYY'  />
                        <i className='text-[0.9rem]' >This field is required</i>
                    </div>
            </div>
            <div className="div2 flex items-center ">
                <hr className='bg-[#dbdbdb] w-[30rem] h-[0.1rem] border-[#dbdbdb] ' />
                <button className='bg-[#854dff] rounded-[7rem] w-[4rem] h-[4rem] p-[0.9rem] flex items-center justify-center ' ><img src={Arrow} alt=""  /></button>
            </div>
            <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
                <span className='text-[5rem] font-extrabold italic text-[#854dff] ' >- -</span>
                <h1 className='text-[5rem] font-bold  italic'  >years</h1>
            </div>
            <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
                <span className='text-[5rem] font-extrabold  italic text-[#854dff]' >- -</span>
                <h1 className='text-[5rem] font-bold  italic'  >months</h1>
            </div>
            <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
                <span className='text-[5rem] font-extrabold italic text-[#854dff]' >- -</span>
                <h1 className='text-[5rem] font-bold  italic'  >days</h1>
            </div>
        </div>
    </div>
  )
}

export default AgeCal