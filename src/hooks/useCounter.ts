import { useState } from "react";

export default function useCounter(initialValue: number = 0) {
  
  const [count, setCount] = useState<number>(initialValue);

  const increment = ()=> setCount(count + 1);
  const decrement = ()=> setCount(count - 1);

  return { count, increment, decrement };
}