import React, { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

const ChatForm = ({setChatHistry,generateBotResponse,chatHistry}) => {
  const [inpValue,setInpValue] = useState('')
  // console.log(inpValue)
  const handleFormSubmit = (e)=>{
    e.preventDefault()
    if(!inpValue.trim()) return ;
    setInpValue('')
    // update chat history with user msg / input er value diye user er object banacche ja app.jsx er faka array er moddhe rakhche
    setChatHistry((prev)=>[...prev ,{role:'user' ,text:inpValue}])
     
    // delay 600ms before sowing bot response or thinking
    setTimeout(()=>{
      // update chat history with bot msg Thinking / input er value diye user er object banacche ja app.jsx er faka array er moddhe rakhche
      setChatHistry((prev)=>[...prev ,{role:'model' ,text:'Thinking...'}])

      // call the function to generate bot response
      generateBotResponse([...chatHistry, {role:'user' ,text:inpValue}])

    },600)
    
  }
  return (
    <>
       <form onSubmit={handleFormSubmit} className='chatForm flex items-center outline outline-[#cccce5] rounded-[32px]'>
          <input value={inpValue} onChange={(e)=>setInpValue(e.target.value)} type='text' className='msgInput border-0 outline-0 bg-none h-[45px] px-[15px] w-[90%]' placeholder='Message...' required />
          <button className='bg-[#6D4FC2] w-[35px] h-[35px] flex justify-center items-center text-[#fff] text-[22px] rounded-full cursor-pointer hover:bg-[#593bab] duration-[.4s]'><LuArrowUpRight /></button>
        </form>
    </>
  )
}

export default ChatForm