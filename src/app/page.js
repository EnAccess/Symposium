import { Arrow, Facebook, Hand, Ico, Light, Prof, Ticket } from "@/components/icons/svg";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Header />
   <HeroSection />

   <div className="bg-white py-16 max-w-[80rem] mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col gap-2.5 w-1/3">
        <h2 className="text-4xl font-extrabold mb-4 text-[#071133]">Symposium as a Catalyst for Change.</h2>
        <p className="text-sm text-gray-600 ">Driving Energy Transition: A pivotal event in shaping a just and sustainable energy future.</p>
        </div>
       <div>
        <Light />
       </div>
      </div>
      
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">WHY JOIN US</h3>
        <p className="text-gray-600 mb-8">Welcome to the first event to focus specifically on the intersection of Open Source and Energy Access.</p>
        <div className="flex justify-center space-x-8">
          <div className="bg-[#0076BF] w-[15rem] text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Hand />
            <h4 className="font-bold mb-3">Event Nature and Purpose</h4>
            <p className="mb-4 text-white/80 text-xs leading-4">Inaugural Symposium: A premier platform to forge valuable partnerships.</p>
            
            
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>

            </ul>
          </div>
          <div className="bg-[#071133] w-[15rem] text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Hand />
            <h4 className="font-bold mb-3">Event Nature and Purpose</h4>
            <p className="mb-4 text-white/80 text-xs leading-4">Inaugural Symposium: A premier platform to forge valuable partnerships.</p>
            
            
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>
                 <li className="flex items-center gap-2 text-sm"> 
               <Ico />
                 Global policymakers</li>

            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Ticket />
        <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-bold ">JOIN US !!</h3>
        <div className="flex flex-col gap-1">
        <p className="text-gray-600 text-sm">Join Us: Free admission, limited availability.</p>
        <p className="text-gray-600 text-sm">Secure your spot for this transformative event!</p>
        </div>
    
        </div>
      
      </div>
    </div>
    <div className="flex flex-col gap-10">
<div>
    <div className="bg-[#0076BF] ">
      <div className="py-5 uppercase text-white mx-auto max-w-[80rem]">organizers</div>
    </div>
    <div className="mx-auto max-w-[80rem]  flex justify-center gap-40">
    <div className="flex flex-col items-center gap-2.5 w-[20rem]">
      <img src="./images/enaccess.png" className=""/>
      <p className="text-xs text-center mt-[-4rem]">We co-create open source solutions that 
help bring modern energy to the poorest people in the world.</p>
<a href="" className="flex items-center  gap-2 animate-bounce text-[#0076BF] text-xs">Visit website <Arrow /></a>
    </div>

    <div className="flex flex-col items-center gap-2.5 w-[20rem]">
      <img src="./images/enaccess.png" className=""/>
      <p className="text-xs text-center mt-[-4rem]">We co-create open source solutions that 
help bring modern energy to the poorest people in the world.</p>
<a href="" className="flex items-center  gap-2 animate-bounce text-[#0076BF] text-xs">Visit website <Arrow /></a>
    </div>
    </div>

    </div>

    <div className="">
    <div className="bg-[#0076BF] ">
      <div className="py-5 uppercase text-white mx-auto max-w-[80rem]">organizers</div>
    </div>
    <div className="mx-auto max-w-[80rem]  flex justify-center gap-40">
    <div className="flex flex-col items-center gap-2.5 w-[20rem]">
      <img src="./images/enaccess.png" className=""/>
      <p className="text-xs text-center mt-[-4rem]">We co-create open source solutions that 
help bring modern energy to the poorest people in the world.</p>
<a href="" className="flex items-center  gap-2 animate-bounce text-[#0076BF] text-xs">Visit website <Arrow /></a>
    </div>

    <div className="flex flex-col items-center gap-2.5 w-[20rem]">
      <img src="./images/enaccess.png" className=""/>
      <p className="text-xs text-center mt-[-4rem]">We co-create open source solutions that 
help bring modern energy to the poorest people in the world.</p>
<a href="" className="flex items-center  gap-2 animate-bounce text-[#0076BF] text-xs">Visit website <Arrow /></a>
    </div>
    </div>

    </div>
    </div>

    <footer className="bg-[#0076BF] flex flex-col gap-10 text-white pt-10 pb-4 mt-10">
        <div className="container mx-auto  flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 gap-4 justify-center">
          <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Symposium</h3>
              <p className="text-xs text-white/80 ">Driving Energy Transition: A pivotal event in shaping a just and sustainable energy future.</p>
            </div>
 

            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#">Agenda</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Address: 123 Street, City, Country</p>
              <p className="text-sm">Email: example@example.com</p>
              <p className="text-sm">Phone: +1 123-456-7890</p>
            </div>

            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Let's connect</h3>
              <p  className="text-xs">Follow us on social media:</p>
              <ul className="flex items-center gap-2.5 mt-2.5">
                <li>
                  <a href="#"><Facebook /></a>
                </li>
                <li>
                  <a href="#"><Facebook /></a>
                </li>
                <li>
                  <a href="#"><Facebook /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-xs">
          <p>&copy; {new Date().getFullYear()} EnAccess</p>
        </div>
      </footer>
   </>
  );
}
