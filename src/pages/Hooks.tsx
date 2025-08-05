"use client";

import useWindowWidth from "../hooks/useWindowWidth";
import useOnlineStatus from "../hooks/useOnlineStatus";
import age from "../hooks/age";
import LoadingSpinner from "../components/LoadingSpinner"
import { Dropdown } from "../components/DropdownClickOutside";
import { Modal } from "../components/ModalClickOutside";
import { useState } from "react";

export default function Hooks() {

  const width = useWindowWidth();
  const breakPoint = 768;//breakpoint til at styre side indhold via js

  const online = useOnlineStatus();//er siden online? evt. popup til spil-sider

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-2">
      <LoadingSpinner />
      <Dropdown button={<p>button click outside to close</p>} children={
        <>
          <p>asdf</p>
          <p>as12312312</p>
        </>
      }/>
      
      <button onClick={()=> setIsModalOpen(true)} className="mx-2 p-2 border">Modal click outside to close</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} children={
        <>
        <p>modal content</p>
        </>
      }/>

      <div className="flex gap-1">Layout: {width < breakPoint ? <div>Mobile</div> : <div>Desktop</div>}</div>
      {<div className="flex gap-1">Du er: {online ? <div>Online</div> : <div>Offline</div>}</div>}
      <p className="">Toke HK er {age} år gammel</p>
    </div>
  );
};

