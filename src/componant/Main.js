import React, { useEffect, useState } from 'react';
import "../App.css";
import ReactAudioPlayer from 'react-audio-player';
import play from '../asset/play.mp3';
import correct from '../asset/correct.mp3';
import wait from '../asset/wait.mp3';
import wrong from '../asset/wrong.mp3';
import useSound from 'use-sound';




const Main = ({ques,que,setQue,setStop}) => {
  const [questionNumber,setQuestionNumber]=useState(null);
  const [selection, setSelection]=useState(null);
  const [className,setClassname]=useState('option');
  const [letPlay]=useSound(play);
  const [correctPlay]=useSound(correct);
  const [wrongPlay]=useSound(wrong);
  const [waitPlay]=useSound(wait);
  useEffect(()=>{
   letPlay();
  },[letPlay])
  
  const delay =(duration, callback)=>{
    setTimeout(() => {
      callback();
      
    }, duration);

  }
  useEffect(()=>{
    setQuestionNumber(ques[que-1]) 
    
  },[ques,que]);

  const handleClick = (o)=>{
  
    setSelection(o);
    setClassname("option active");
  
    delay(2000,()=>{setClassname(o.check?"option correct":"option wrong")})

    delay(5000,()=>{
      if(o.check)
      {
        correctPlay()
        delay(2000,()=>{
          setQue((p)=>p+1);
        setSelection(null);

        })
        
      }else{
        wrongPlay();
        delay(2000,()=>{
          setStop(true)
          setQue(null)

        })
        
      }
  })
}
  
  console.log(questionNumber)
  
  return ( <div className='bottom' >
    
     <div className='que'>{questionNumber?.question}</div>
        <div className='ans'>
          {questionNumber?.answer.map((o)=>{
           
           return (<div className={selection == o ?className:"option"} onClick={()=>handleClick(o)} key={o.key}>
            {o.option}
         </div>)
          })
          }
        
        </div>
       
       </div>
      
        
      
    )
  
    
  }
  
  
  
  


export default Main
