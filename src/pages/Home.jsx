import React from 'react'
import { useState } from 'react'
import { IoLogoSnapchat } from "react-icons/io";

import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from '../components/ChatForm';



const Home = () => {
      const [chatHistry, setChatHistry] = useState([])
      console.log(chatHistry)
    
      const generateBotResponse = async (data)=>{
    
        // helper function to update chat history from bot
        const updateHistory =(text)=>{
          setChatHistry((prev)=>[...prev.filter(msg => msg.text !== 'Thinking...'),{role:"model",text}])
        }
        // format chat data for API request
       data = data.map(({role,text})=>({role,parts:[{text}]}))
    
       const requestOptions ={
        method : "POST",
        headers:{'Content-Type' : 'application/json'} ,
        body : JSON.stringify({contents: data})
       }
    
       try{
        // make the api call to get the bot's response
          const response = await fetch(import.meta.env.VITE_API_URL,requestOptions);
          const Data = await response.json()
          if(!response.ok) throw new Error(data.error.message || "something went wrong")
            console.log(Data)
          const botResponseText = Data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
          updateHistory(botResponseText)
       }
       catch(error){
        console.log(error)
       }
      }

  return (
    <>
        <section className="w-full min-h-screen bg-gradient-to-b from-black via-[#111827] to-black flex justify-center items-center">
  <div className="container flex justify-center items-center">
    <div className="popUp w-[420px] bg-[#ffffff] rounded-[15px] relative shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)]">
      {/* header */}
      <div className="head flex justify-between px-[22px] py-[15px] bg-[#6D4FC2] rounded-t-[15px]">
        <div className="headInfo flex gap-[10px] items-center">
          <span className="bg-[#fff] inline-block p-[8px] rounded-full">
            <IoLogoSnapchat className="text-[#1b61a3]" />
          </span>
          <h2 className="text-[20px] font-semibold text-[#fff]">Chatbot</h2>
        </div>
        <button className="bg-[#fff] p-[8px] rounded-full cursor-pointer hover:bg-[#593bab] hover:text-[#fff] text-[20px] duration-[.4s]">
          <MdKeyboardArrowDown />
        </button>
      </div>

      {/* chatBody */}
      <div className="chatBody px-[22px] py-[35px] h-[460px] mb-[82px] overflow-y-scroll flex flex-col gap-[10px]">
        <div className="bot-msg msg flex gap-[10px] items-center">
          <span className="bg-[#6D4FC2] inline-block p-[8px] rounded-full">
            <IoLogoSnapchat className="text-[#ffffff]" />
          </span>
          <p className="msgText w-[75%] bg-[#F97A00] text-[#fff] font-medium p-[12px] rounded-t-[10px] rounded-br-[10px]">
            Hey there, How can I help you today?
          </p>
        </div>

        {chatHistry.map((item, i) =>
          item.role === "user" ? (
            <div
              key={i}
              className={`userMsg ${
                item.role === "model" ? "bot" : "user"
              }-msg flex flex-col items-end`}
            >
              <p className="bg-[#6D4FC2] w-[75%] font-belleza p-[12px] rounded-t-[15px] rounded-bl-[15px] text-[#fff] font-medium">
                {item.text}
              </p>
            </div>
          ) : (
            // bot msg
            <div
              key={i}
              className="bot-msg msg flex gap-[10px] items-center"
            >
              <span className="bg-[#6D4FC2] inline-block p-[8px] rounded-full">
                <IoLogoSnapchat className="text-[#ffffff]" />
              </span>
              <p className="msgText w-[75%] text-[#fff] font-medium font-montserrat bg-[#F97A00] p-[12px] rounded-t-[15px] rounded-br-[15px]">
                {item.text}
              </p>
            </div>
          )
        )}
      </div>

      {/* footer */}
      <div className="footer absolute bottom-0 w-full px-[22px] py-[20px]">
        <ChatForm
          setChatHistry={setChatHistry}
          generateBotResponse={generateBotResponse}
          chatHistry={chatHistry}
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Home