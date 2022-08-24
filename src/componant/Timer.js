import React, { useEffect, useState } from 'react'

const Timer = ({que,setStop}) => {
  const[timer,setTimer]=useState(30);
  useEffect(()=>{
    if(timer === 0 ){
     return setStop(true)
    }
    const interval = setInterval(() => {
      setTimer((p)=>p-1);
      
    }, 1000);
  
    return ()=> clearInterval(interval);
  },[timer,setStop])
  useEffect(()=>{
  setTimer(30)
  },[que])
  return timer
}

export default Timer