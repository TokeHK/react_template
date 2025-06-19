"use client";

import useCounter from "../hooks/useCounter";
import useWindowWidth from "../hooks/useWindowWidth";
import useOnlineStatus from "../hooks/useOnlineStatus";

import LoadingSpinner from "../components/LoadingSpinner"
import age from "../hooks/age";

export default function Hooks() {
  
  const { count, increment, decrement } = useCounter(5);
  const width = useWindowWidth();
  const breakPoint = 768;
  const online = useOnlineStatus();

  return (
    <div className="mx-2">
      <LoadingSpinner />

      <p className="">Counter: {count}</p>
      <button onClick={increment} className="border-2 p-2 cursor-pointer">+ 1</button>
      <button onClick={decrement} className="border-2 p-2 cursor-pointer">- 1</button>
    
      <div className="flex gap-1">Layout: {width < breakPoint ? <div>Mobile</div> : <div>Desktop</div>}</div>
      {<div className="flex gap-1">Du er: {online ? <div>Online</div> : <div>Offline</div>}</div>}
      <p className="">Toke HK er {age} år gammel</p>
    </div>
  ); 
};