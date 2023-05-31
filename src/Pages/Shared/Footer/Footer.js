import React from 'react';
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import logo from '../../../Assets/mentorHub logo.png'
// import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className = 'bg-[#0D0D0D] lg:p-20 md:p-10 px-5 pt-5 -mt-8' >
         
         
           <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  px-4 '>
            <div className=''>
                
                   <img className='w-[65%]' src={logo} alt=''></img>
               
                 <h2 className='text-white my-6 text-sm'>
                 Connectingx you with expert mentors to help you grow your skills and achieve your goals.
                 </h2> 
       <ul class="flex justify-start items-end gap-2 ">
        <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <RiFacebookCircleFill className='text-[#334F5D] text-lg'></RiFacebookCircleFill>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <ImLinkedin2 className='text-[#334F5D] text-sm'></ImLinkedin2>
        </li>
        <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <ImYoutube className='text-[#334F5D] text-sm'></ImYoutube>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <FiInstagram className='text-[#334F5D] text-sm'></FiInstagram>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <FaWhatsapp  className='text-[#334F5D] text-sm'></FaWhatsapp>
        </li>
         <li className = 'w-9 h-9 hover:bg-[#5A0101] rounded-full bg-white cursor-pointer flex justify-center items-center' >
          <AiOutlineTwitter className='text-[#334F5D] text-sm'></AiOutlineTwitter>
        </li>

      </ul>
   
</div>


                <div className='px-6 lg:mt-0 mt-4'>
                    <h2 className='text-lg text-white mb-2 font-bold'>For Mentee</h2>
                    
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Search for Mentors</h2>
                     
                    <h2 className='text-sm text-gray-300  cursor-pointer'>Login</h2>
                     
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Register</h2>
                     
                    <h2 className='text-sm text-gray-300  cursor-pointer'>Booking</h2>
                     
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Mentee  Dashboard</h2>
                     
                  
                </div>
               <div className='px-6 lg:mt-0 mt-4'>
                    <h2 className='text-lg text-white mb-2 font-bold'>For Mentors</h2>
                    
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Join as a mentor</h2>
                     
                    <h2 className='text-sm text-gray-300 cursor-pointer'>Chat</h2>
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Login</h2>
                     
                    <h2 className='text-sm text-gray-300  cursor-pointer'>Register</h2>
                     
                    <h2 className='text-sm text-gray-300 my-1  cursor-pointer'>Mentors Dashboard</h2>
                    
                </div>
               <div className='px-6 lg:mt-0 mt-4'>
                   
                  <h2 className='text-lg text-white mb-2 font-bold'>Contact Us</h2>

                  <div className='flex justify-start gap-2 items-start'>
                      <GoLocation className='text-white font-semibold'></GoLocation>
                    <h2 className='text-sm text-gray-300 cursor-pointer'>290/2 Elephant road, Dhaka - 1205,
                    Dhaka, Bangladesh</h2>
                  </div> 

                  <div className='flex justify-start gap-2  items-start my-2'>
                      <MdCall className='text-white font-semibold'></MdCall>
                    <h2 className='text-sm text-gray-300  cursor-pointer'> +8801602440660</h2>
                    </div> 

                    <div className='flex justify-start gap-2  items-start'>
                      <MdCall className='text-white font-semibold'></MdCall>
                    <h2 className='text-sm text-gray-300  cursor-pointer'>mentorhubglobal@gmail.com</h2>
                    </div> 
                </div>
                
           </div>
           <hr className='text-gray-50 text-[0.1px] mt-10'></hr>
           <div className='flex justify-between items-center'>
  <h2 className=' text-white text-sm mt-10 -mb-16'>Copyright © 2023 Mentors hub. All rights reserved.</h2>

  <h2 className='text-white text-bold text-sm mt-10 -mb-16'>
    terms and Condition
  </h2>
           </div>
  
          
        </div>
    );
};

export default Footer;