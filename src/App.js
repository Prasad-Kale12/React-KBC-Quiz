import {data} from './AmountList';
import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './componant/Main';
import Timer from './componant/Timer';
import User from './User';
// import {ques} from './Question';



function App() {
  const [que, setQue]= useState(1);
  const [stop, setStop]=useState(false);
  const [earned, setEarned]=useState("0");
  const [user,setUser]=useState(null);
  const ques = [
    {
    id:1,
    question:" Which of the following is the correct name of React.js?",
    answer:[
        {key:1,option:'React',check:false},
        {key:2,option:'React.js',check:false},
        {key:3,option:'ReactJs',check:false},
        {key:4,option:'All above',check:true}]
  } ,
  {
    id:2,
    question:" What of the following is used in React.js to increase performance?",
    answer:[
        {key:1,option:"Original DOM",check:false},
        {key:2,option:"Virtual DOM",check:true},
        {key:3,option:"Both A & B",check:false},
        {key:4,option:"None Of Above",check:false}]
  },
  {
    id:3,
    question:" Which of the following acts as the input of a class-based component?",
    answer:[
        {key:1,option:"Class",check:false},
        {key:2,option:"Factory",check:false},
        {key:3,option:"Render",check:false},
        {key:4,option:"Props",check:true}]
  },
  {
    id:4,
    question:" What is the default port where webpack-server runs?",
    answer:[
        {key:1,option:8080,check:true},
        {key:2,option:3000,check:false},
        {key:3,option:3030,check:false},
        {key:4,option:6060,check:false}]
  },
  {
    id:5,
    question:" How many numbers of elements a valid react component can return?",
    answer:[
        {key:1,option:1,check:true},
        {key:2,option:3,check:false},
        {key:3,option:4,check:false},
        {key:4,option:5,check:false}]
  },
  {
    id:6,
    question:" What are the two ways to handle data in React?",
    answer:[
        {key:1,option:"State & Props",check:true},
        {key:2,option:"Services & Components",check:false},
        {key:3,option:"State & Services",check:false},
        {key:4,option:"State & Component",check:false}]
  },
  {
    id:7,
    question:" Does React.js create a VIRTUAL DOM in the memory?",
    answer:[
        {key:1,option:"True",check:true},
        {key:2,option:"false",check:false},
        {key:3,option:"cannot say",check:false},
        {key:4,option:"can be true or false",check:false}]
  },
  {
    id:8,
    question:" What does ES6 stand for?",
    answer:[
        {key:1,option:'ECMA 6',check:false},
        {key:2,option:"ECMAScript 6",check:true},
        {key:3,option:"ECMAJavaScript 6",check:false},
        {key:4,option:"EJava6",check:false}]
  },
  {
    id:9,
    question:" Which of the following method refers to the parent class in React.js?",
    answer:[
        {key:1,option:"inherits",check:true},
        {key:2,option:"self()",check:false},
        {key:3,option:"Super()",check:true},
        {key:4,option:"this()",check:false}]
  },
  {
    id:10,
    question:" Which of the following method is not a part of ReactDOM?",
    answer:[
        {key:1,option:"ReactDOM.destroy()",check:true},
        {key:2,option:"ReactDOM.hydrate()",check:false},
        {key:3,option:"ReactDOM.createPortal()",check:false},
        {key:4,option:"ReactDOM.findDOMNode()",check:false}]
  },
  {
    id:11,
    question:" What is true for the keys given to a list of elements in React?",
    answer:[
        {key:1,option:"Unique in the DOM.",check:false},
        {key:2,option:"Unique among the siblings only.",check:true},
        {key:3,option:"Do not require to be unique.",check:false},
        {key:4,option:"None of the above.",check:false}]
  },
  {
    id:12,
    question:" JSX stands for _____.",
    answer:[
        {key:1,option:"JSON",check:false},
        {key:2,option:"JSON Xml",check:false},
        {key:3,option:"JavaScript Xml",check:true},
        {key:4,option:"Java Xml",check:false}]
  },
  {
    id:13,
    question:" What does props stand for?",
    answer:[
        {key:1,option:"Proper Argument",check:false},
        {key:2,option:"Properties",check:true},
        {key:3,option:"Proper Return Value",check:false},
        {key:4,option:"All",check:false}]
  },
  {
    id:14,
    question:" With an arrow function – this keyword represents _____.",
    answer:[
        {key:1,option:"Content",check:false},
        {key:2,option:"header",check:true},
        {key:3,option:"Current object",check:false},
        {key:4,option:"child",check:false}]
  },
  {
    id:15,
    question:" In ES6 – Which are the keywords to define variables?",
    answer:[
        {key:1,option:"var",check:false},
        {key:2,option:"let",check:false},
        {key:3,option:"const",check:false},
        {key:4,option:"all of above",check:true}]
  }
  ];
  useEffect(()=>{
    que>1 && setEarned(data.find((m)=> m.id === que-1).amount)

  },[que,data]);
 
  return ( <>
  {que < 15 ? 
    
    <div className="App">
    
    {user ? <> 
     
    <div className='Main'>
    {stop ? <h1 className='stop'> You Earned:{earned}</h1>:<>
    <div className='top'>
  <div className='timer'><Timer que={que} setStop={setStop}></Timer></div>
  </div>
     <Main ques={ques}que={que} setQue={setQue} setStop={setStop}></Main>
     </>}
    </div>
    
    <div className='Pyramid'>
       
      <ul className='priceList'>
        {data.map((p)=>{
          return(
           <li className={que == p.id ? "priceItem active ":"priceItem"}> <span className='queNumber'>{p.id}</span> <span className='amout'>{p.amount}</span></li>)

        })}
      
      </ul>
  
    </div>
 


</> : <User setUser={setUser}></User>}
</div>
    
    
    
    
    
    : <h1 className='win'>Congratulation</h1>}  
  </>
  
  
  
  )}   

export default App;
