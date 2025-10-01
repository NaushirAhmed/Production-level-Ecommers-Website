import React from 'react'
import { useState } from 'react';

const OtpBox = ({length,onChange}) => {
  const [otp,setOtp] = useState(new Array(length).fill(""));
  
  const handleChange = (element,index) => {
    const value = element.value;
    if(isNaN(value)) return;
    
    // Update OTP value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus on next input
    if(value && index < length - 1){
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }

  const handleKeyDown = (event,index) => {
    if(event.key === "Backspace" && !otp[index] && index > 0){
      document.getElementById(`otp-input-${index-1}`).focus();
    }
  }
  
  return (
    <div className='py-5 flex gap-2 justify-center  otpBox'>
      {otp.map((data,index) => {
        return ( // Added return statement
          <input 
            key={index}
            id={`otp-input-${index}`}
            type='text'
            maxLength={1}
            value={otp[index]}
            onChange={(e)=>handleChange(e.target,index)} // Fixed: onchange -> onChange
            onKeyDown={(e)=>handleKeyDown(e,index)}
            className='w-[45px] h-[45px] text-center text-[17px] border border-black outline-none rounded'
          />
        );
      })}
    </div>
  )
}

export default OtpBox;