import React from 'react'

const ChatMsg = ({chat}) => {
  return (
    <div>
        <div key={i} className={`userMsg ${item.role === 'model' ? 'bot' : 'user'}-msg flex flex-col items-end`}>
            {item.role === 'model' && <IoLogoSnapchat className='text-[#1b61a3]'/>}
            <p className='bg-[#6D4FC2] w-[75%] p-[12px] rounded-t-[15px] rounded-bl-[15px] text-[#fff] font-medium'>{item.text}</p>
        </div>
    </div>
  )
}

export default ChatMsg