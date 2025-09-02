import { useState } from 'react'
import { IoLogoSnapchat } from "react-icons/io";
import './App.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";

function App() {
  

  return (
    <div className='w-full bg-[#D92C54] min-h-screen'>
      <div className="container ">
        <div className='flex justify-center items-center '>
            <div className="popUp w-[420px] bg-[#ffffff] rounded-[15px] mt-[150px] relative">
              {/* header */}
              <div className="head flex justify-between px-[22px] py-[15px] bg-[#6D4FC2] rounded-t-[15px]">
                <div className="headInfo flex gap-[10px] items-center">
                  <span className='bg-[#fff] inline-block p-[8px] rounded-full'><IoLogoSnapchat className='text-[#1b61a3]'/></span>
                  <h2 className='text-[20px] font-semibold text-[#fff]'>Chatbot</h2>
                </div>
                <button className='bg-[#fff] p-[8px] rounded-full cursor-pointer hover:bg-[#593bab] hover:text-[#fff] text-[20px] duration-[.4s]'><MdKeyboardArrowDown /></button>
              </div>

              {/* chatBody */}
              <div className="chatBody px-[22px] py-[35px] h-[460px] overflow-hidden flex flex-col gap-[10px]">
                <div className="msgBot msg flex gap-[10px] items-center">
                  <span className='bg-[#6D4FC2] inline-block p-[8px] rounded-full'><IoLogoSnapchat className='text-[#ffffff]'/></span>
                  <p className='msgText w-[75%] bg-[#6e4fc294] p-[12px] rounded-[8px]'>Hey there, How can I help you today?</p>
                </div>

                <div className="userMsg msg flex flex-col items-end">
                  <p className='bg-[#6D4FC2] w-[75%] p-[12px] rounded-t-[15px] rounded-bl-[15px] text-[#fff] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

              </div>

              {/* footer */}
              <div className="footer absolute bottom-0 w-full px-[22px] py-[20px]">
                <form className='chatForm flex items-center outline outline-[#cccce5] rounded-[32px]'>
                  <input type='text' className='msgInput border-0 outline-0 bg-none h-[45px] px-[15px] w-[90%]' placeholder='Message...' required />
                  <button className='bg-[#6D4FC2] w-[35px] h-[35px] flex justify-center items-center text-[#fff] text-[22px] rounded-full cursor-pointer hover:bg-[#593bab] duration-[.4s]'><LuArrowUpRight /></button>
                </form>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default App
