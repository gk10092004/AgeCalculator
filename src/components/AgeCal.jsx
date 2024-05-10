import React, { useEffect, useRef, useState } from "react";
import Arrow from "../assets/icon-arrow.svg";

const AgeCal = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const mon = useRef(null)
  const yr = useRef(null)
  const dy = useRef(null)
  const handle = (e) =>{
    e.preventDefault();
    //for year
    if(year == undefined){alert("year section is empty")}
    else if(year>=1800){setYear(year)}
    //for month
    if(month==undefined){alert("month section is empty")}
    else if(month>=1 && month<=12){setMonth(month)}
    else{alert("month is not valid")}
    //for day
    if(day==undefined){alert("day section is empty")}
    else{
        if((month==1||month==3||month==5||month==7||month==8||month==10||month==12)&&(day>=1&&day<=31)){setDay(day)}
        else if((month==4||month==6||month==9||month==11)&&(day>=1&&day<=30)){setDay(day)}
        else if(month==2){
            if(year%4==0&&(day>=1&&day<=29)){setDay(day)}
            else if(day>=1&&day<=28){(setDay(day))}
            
        }
        else{alert("day is not valid for month")}
    }
    // console.log("day :",day,"month :",month,"year :",year);
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() +1 ;
    const currentYear = currentDate.getFullYear();
    let totalDays = "- -";
    let totalMonths = "- -";
    let totalyear = "- -";
    //for date
    
    if(currentDay>=day&&currentMonth>=month&&currentYear>=year){
        totalDays = currentDay-day;
        totalMonths = currentMonth-month;
        totalyear = currentYear-year;
    }
    else if(currentDay>=day&&currentMonth<month&&currentYear>=year){
        totalDays = currentDay-day;
        totalMonths = currentMonth-month+12;
        totalyear = currentYear-year-1;
    }
    else if(currentDay<day&&currentMonth>=month&&currentYear>=year){
        // totalDays = currentDay-day;
        totalMonths = currentMonth-month-1;
        totalyear = currentYear-year;
        if(currentMonth==1||currentMonth==3||currentMonth==5||currentMonth==7||currentMonth==8||currentMonth==10||currentMonth==12){totalDays = currentDay-day+31;}
        else if((currentMonth==4||currentMonth==6||currentMonth==9||currentMonth==11)){totalDays = currentDay-day+30}
        else if(currentMonth==2){
            if(year%4==0){totalDays = currentDay-day+29}
            else{totalDays = currentDay-day+28}
            
        }
    }
    else if(currentDay<day&&currentMonth<month&&currentYear>=year){
        // totalDays = currentDay-day;
        totalMonths = currentMonth-month-1+12;
        totalyear = currentYear-year-1;
        if(currentMonth==1||currentMonth==3||currentMonth==5||currentMonth==7||currentMonth==8||currentMonth==10||currentMonth==12){totalDays = currentDay-day+31;}
        else if((currentMonth==4||currentMonth==6||currentMonth==9||currentMonth==11)){totalDays = currentDay-day+30}
        else if(currentMonth==2){
            if(year%4==0){totalDays = currentDay-day+29}
            else{totalDays = currentDay-day+28}
            
        }
    }
    if(totalDays>=0 && totalMonths>=0 &&totalyear>=0){
      dy.current.innerHTML = totalDays;
      mon.current.innerHTML = totalMonths;
      yr.current.innerHTML = totalyear;
    }
    else{
      totalDays = "- -";
      totalMonths = "- -";
      totalyear = "- -";
    }
  }
  return (
    <div className="bg-[#ffffff] p-[2rem] rounded-br-[10rem] ">
      <div className=" rounded-br-[9rem] flex flex-col gap-[0.2rem]">
        <div className="div1 flex gap-[2.5rem] ">
          <div className="flex flex-col  items-start w-[8rem]   ">
            <label className="mb-[0.3rem] font-semibold ">
              DAY
            </label>
            <input
              type="number"
              name="day"
              className="box text-[2.7rem] font-bold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb]  "
              placeholder="DD"
              onChange={(e)=>{setDay(e.target.value)}}
            />
            <i className="text-[0.9rem]">This field is required</i>
          </div>
          <div className="flex flex-col   items-start w-[10rem] ">
            <label  className="mb-[0.3rem] font-semibold ">
              MONTH
            </label>
            <input
              type="number"
              name="month"
              className="box text-[2.7rem] font-bold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb]"
              placeholder="MM"
              onChange={(e)=>{setMonth(e.target.value)}}
            />
            <i className="text-[0.9rem]">This field is required</i>
          </div>
          <div className="flex flex-col  items-start w-[8rem] ">
            <label  className="mb-[0.3rem] font-semibold ">
              YEAR
            </label>
            <input
              type="number"
              name="year"
              className="box text-[2.7rem] font-bold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb] "
              placeholder="YYYY"
              onChange={(e)=>{setYear(e.target.value)}}
            />
            <i className="text-[0.9rem]">This field is required</i>
          </div>
        </div>
        <div className="div2 flex items-center ">
          <hr className="bg-[#dbdbdb] w-[30rem] h-[0.1rem] border-[#dbdbdb] " />
          <button 
          className="bg-[#854dff] rounded-[7rem] w-[4rem] h-[4rem] p-[0.9rem] flex items-center justify-center " 
          onClick={handle}
          >
            <img src={Arrow} alt="" />
          </button>
        </div>
        <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
          <span className="text-[5rem] font-extrabold italic text-[#854dff] " ref={yr} >
            - -
          </span>
          <h1 className="text-[5rem] font-bold  italic">years</h1>
        </div>
        <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
          <span className="text-[5rem] font-extrabold  italic text-[#854dff] " ref={mon} >
            - -
          </span>
          <h1 className="text-[5rem] font-bold  italic">months</h1>
        </div>
        <div className="div3 flex gap-[1rem] items-center leading-[5rem] ">
          <span className="text-[5rem] font-extrabold italic text-[#854dff]" ref={dy} >
            - -
          </span>
          <h1 className="text-[5rem] font-bold  italic">days</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCal;
