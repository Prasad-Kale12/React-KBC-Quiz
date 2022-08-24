import React, { useRef } from 'react';
import './App.css';

const User = ({setUser}) => {
  const inputRef = useRef();
  const handle =()=>{
    inputRef.current.value && setUser(inputRef.current.value)
  }
  return (
    <form  className='form'>
      <input className='input' placeholder="User Name" ref={inputRef} />
      <button className='submit' type='submit' onClick={handle}>Submit</button>
    </form>
  )
}

export default User