import React, { useEffect, useRef, useState } from "react";
import Arrow from "../assets/icon-arrow.svg";

const AgeCal = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  //this is for update value ouput box
  const mon = useRef(null)
  const yr = useRef(null)
  const dy = useRef(null)
  //this for empty error 
  const dfield = useRef(null)
  const mfield = useRef(null)
  const yfield = useRef(null)
  //this for validity error
  const dvalid = useRef(null)
  const mvalid = useRef(null)
  const yvalid = useRef(null)
  //this for current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() +1 ;
  const currentYear = currentDate.getFullYear();

  const handle = (e) =>{
    e.preventDefault();
    //for year
    if(year == undefined){
      alert("year section is empty")
      yfield.current.style.display = "block";
      yfield.current.style.color = "red";
    }
    else if(year>=1800&&year<=currentYear){
      setYear(year)
      yfield.current.style.display = "none";
      yvalid.current.style.display = "none";
    }
    else{
      yfield.current.style.display = "none";
      yvalid.current.style.display = "block";
      yvalid.current.style.color = "red";
      alert("year from 1800 to current only")
    }
    //for month
    if(month==undefined){
      alert("month section is empty")
      mfield.current.style.display = "block";
      mfield.current.style.color = "red";
    }
    else if(month>=1 && month<=12){
      setMonth(month)
      mfield.current.style.display = "none";
      mvalid.current.style.display = "none";
    }
    else{
      mfield.current.style.display = "none";
      mvalid.current.style.display = "block";
      mvalid.current.style.color = "red";
    }
    //for day
    if(day==undefined){
      alert("day section is empty")
      dfield.current.style.display = "block";
      dfield.current.style.color = "red";
    }
    else{
        if((month==1||month==3||month==5||month==7||month==8||month==10||month==12)&&(day>=1&&day<=31)){
          setDay(day)
          dfield.current.style.display = "none";
          dvalid.current.style.display = "none";
        }
        else if((month==4||month==6||month==9||month==11)&&(day>=1&&day<=30)){
          setDay(day)
          dfield.current.style.display = "none";
          dvalid.current.style.display = "none";
        }
        else if(month==2){
            if(year%4==0&&(day>=1&&day<=29)){
              setDay(day)
              dfield.current.style.display = "none";
              dvalid.current.style.display = "none";           
            }
            else if(year%4!=0&&(day>=1&&day<=28)){
              (setDay(day))
              dfield.current.style.display = "none";
              dvalid.current.style.display = "none";         
            }
            else{
              // setDay()
              alert("invalid day or year")
              yfield.current.style.display = "none";
              yvalid.current.style.display = "block";
              yvalid.current.style.color = "red";
              dvalid.current.style.display = "block";
              dvalid.current.style.color = "red";
            }
        }
        else{
          dfield.current.style.display = "none";
          dvalid.current.style.display = "block";
          dvalid.current.style.color = "red";
        }
    }
    // console.log("day :",day,"month :",month,"year :",year);
    
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
        totalMonths = (currentMonth-month==0?currentMonth-month-1+12:currentMonth-month)
        totalyear = (currentMonth-month==0?currentYear-year-1:currentYear-year)
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
    <div className="bg-[#ffffff] p-[2rem] xs2:rounded-br-[10rem] xs1:rounded-br-[8rem] xs2:block ">
      <div className=" rounded-br-[9rem] flex flex-col gap-[0.2rem]">
        <div className="div1 flex xs2:gap-[2.5rem] xs1:gap-[1.5rem] ">
          <div className="flex flex-col  items-start xs2:w-[8rem] xs1:w-[3.8rem]  ">
            <label className="mb-[0.3rem] font-semibold xs1:text-[0.9rem] xs1:font-bold ">
              DAY
            </label>
            <input
              type="number"
              name="day"
              className="box xs2:text-[2.7rem] xs1:text-[1.3rem] xs2:font-bold xs1:font-semibold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb]  "
              placeholder="DD"
              onChange={(e)=>{setDay(e.target.value)}}
            />
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={dfield} >This field is required</i>
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={dvalid} >must be a valid day</i>
          </div>
          <div className="flex flex-col   items-start xs2:w-[10rem] xs1:w-[3.8rem] ">
            <label  className="mb-[0.3rem] font-semibold xs1:text-[0.9rem] xs1:font-bold">
              MONTH
            </label>
            <input
              type="number"
              name="month"
              className="box xs2:text-[2.7rem] xs1:text-[1.3rem] xs2:font-bold xs1:font-semibold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb]"
              placeholder="MM"
              onChange={(e)=>{setMonth(e.target.value)}}
            />
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={mfield} >This field is required</i>
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={mvalid} >must be a valid month</i>
          </div>
          <div className="flex flex-col  items-start xs2:w-[8rem] xs1:w-[3.8rem] ">
            <label  className="mb-[0.3rem] font-semibold xs1:text-[0.9rem] xs1:font-bold ">
              YEAR
            </label>
            <input
              type="number"
              name="year"
              className="box xs2:text-[2.7rem] xs1:text-[1.3rem] xs2:font-bold xs1:font-semibold pl-[0.5rem]  border-[0.1rem]  border-[#dbdbdb] "
              placeholder="YYYY"
              onChange={(e)=>{setYear(e.target.value)}}
            />
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={yfield} >This field is required</i>
            <i className="xs2:text-[0.9rem] xs1:text-[0.7rem] hidden " ref={yvalid}  >must be a valid year</i>
          </div>
        </div>
        <div className="div2 flex items-center ">
          <hr className="bg-[#dbdbdb] xs2:w-[30rem] xs1:w-[13rem]  h-[0.1rem] border-[#dbdbdb] " />
          <button 
          className="bg-[#854dff] rounded-[7rem] xs2:w-[4rem] xs1:w-[3rem] xs2:p-[0.9rem] xs1:p-[0.6rem] flex items-center justify-center " 
          onClick={handle}
          >
            <img src={Arrow} alt="" />
          </button>
        </div>
        <div className="div3 flex gap-[1rem] items-center xs2:leading-[5rem] xs1:leading-[2.5rem]   ">
          <span className="xs2:text-[5rem] xs1:text-[2.5rem] font-extrabold italic text-[#854dff] " ref={yr} >
            - -
          </span>
          <h1 className="xs2:text-[5rem] xs1:text-[2.5rem] font-bold  italic">years</h1>
        </div>
        <div className="div3 flex gap-[1rem] items-center xs2:leading-[5rem] xs1:leading-[2.5rem]  ">
          <span className="xs2:text-[5rem] xs1:text-[2.5rem] font-extrabold  italic text-[#854dff] " ref={mon} >
            - -
          </span>
          <h1 className="xs2:text-[5rem] xs1:text-[2.5rem] font-bold  italic">months</h1>
        </div>
        <div className="div3 flex gap-[1rem] items-center xs2:leading-[5rem] xs1:leading-[2.5rem] ">
          <span className="xs2:text-[5rem] xs1:text-[2.5rem] font-extrabold italic text-[#854dff]  " ref={dy} >
            - -
          </span>
          <h1 className="xs2:text-[5rem] xs1:text-[2.5rem] font-bold  italic">days</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCal;
