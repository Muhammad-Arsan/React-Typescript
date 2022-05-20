import React, { useRef, useState } from "react";

interface Person {
  name: string;
  age: number;
}
interface Props {
  text: string;
  isLoggedIn: boolean;
  amount: number;
  fn: (n: number) => number;
  person: Person;
  handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
}
const TextField: React.FC<Props> = ({ amount, handleChange }) => {
  const [count, setCount] = useState<number | null>(0);
  setCount(43243);

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      TextField
      <div>Amount :{amount}</div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
