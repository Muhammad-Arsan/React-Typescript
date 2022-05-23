import React, { useEffect, useRef } from 'react'

const DomRef = () => {
     const inputRef = useRef<HTMLInputElement>(null!)   // by adding (!) thats mean our inputRef will never be null and we can use with out optional chanining 

     useEffect(()=>{
      inputRef.current.focus();
     },[])
  return (
    <div>
         <input type="text"  ref={inputRef}/>
    </div>
  )
}

export default DomRef