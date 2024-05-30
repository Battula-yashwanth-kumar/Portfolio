"use client"
import { useState } from "react";
import NavLink from "./NavLink";
import Menu from '../_assests/Menu.svg';
import Close from '../_assests/Close.svg';
import Image from "next/image";


const Navbar=()=>{
    const [Open, setOpen] =useState(false);
    const handleClick=()=>{
        setOpen(!Open);
    }
    return (
    <nav className="bg-navbar" >
        <div className="max-w-[90vw] m-0 mx-auto h-[12vh] grid grid-cols-2 xl:grid-cols-12  xl:content-center  ">
        <div className=" col-span-1 xl:col-span-5 grid xl:grid-cols-7 gap-5">
        <div className="xl:col-span-1 w-fit h-fit xl:mx-auto mx-[3vw] my-auto">
  <NavLink href="/" exact className="text-4xl ">
    <span className="rotated-background  inline-block my-auto">
      <span className="inline-block  rotate-[-45deg] py-1 font-semibold font-montserrat text-primary">YK</span>
    </span>
  </NavLink>
</div>
<div className="xl:col-span-5 hidden xl:block xl:content-start my-auto"> 
        <NavLink href='/' className=" text-2xl font-montserrat font-semibold ">Yashwanth Kumar</NavLink>
        </div>
        </div>
        <div className="hidden xl:col-span-7 xl:grid xl:grid-cols-6 font-montserrat gap-3">
        <NavLink href='/skills' className="xl:col-span-1 text-2xl my-auto pl-8">Skills</NavLink>
        <NavLink href='/project' className="xl:col-span-1 text-2xl my-auto">Projects</NavLink>
        <NavLink href='/resume' className="xl:col-span-1 text-2xl my-auto">Resume</NavLink>
        <NavLink href='/about' className="xl:col-span-1 text-2xl my-auto">About Me</NavLink>
        <button className="xl:col-span-2 border-4 border-[#97FFF4] py-1 px-3 rounded-xl"><NavLink href='/contact' className="text-2xl">Get in Touch</NavLink></button>
        </div>
        <div className="xl:hidden" >
            {
                Open?
                <div className=" absolute top-0 left-0 bg-navbar grid grid-cols-12 ">
                <div className=" col-span-11 grid grid-rows-7 h-screen  ">
                <NavLink href='/' className=" text-2xl font-montserrat font-semibold ">Yashwanth Kumar</NavLink>
                <NavLink href='/skills' className="xl:col-span-1 text-2xl mx-auto pl-8">Skills</NavLink>
        <NavLink href='/project' className="xl:col-span-1 text-2xl mx-auto">Projects</NavLink>
        <NavLink href='/resume' className="xl:col-span-1 text-2xl mx-auto">Resume</NavLink>
        <NavLink href='/about' className="xl:col-span-1 text-2xl mx-auto">About Me</NavLink>
        <button className="xl:col-span-2 border-4 border-[#97FFF4] py-1 px-3 rounded-xl"><NavLink href='/contact' className="text-2xl">Get in Touch</NavLink></button>
                    </div>
               
                <div className=" col-span-1 absolute right-0 top-[4vh] w-fit h-fit px-3 py-3 bg-iconcolor cursor-pointer" onClick={handleClick}>
                <Image src={Close} alt="loading" />
                </div>

                </div>


              :
              <div className="col-span-1 relative">
              <div className="absolute right-0 top-[4vh] cursor-pointer" onClick={handleClick}>
               <Image src={Menu} alt="loading" />
              </div>
              </div>

            }
        </div>
        </div>
    </nav>
    )
}
export default Navbar;