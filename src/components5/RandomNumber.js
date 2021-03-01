import React, { useContext } from 'react';
import { NumberContext } from '../context5/NumberContext'

export default function RandomNumber() {
  const { number, updateNumber } = useContext(NumberContext)
  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={ updateNumber }>Update Number</button>
    </div>
  );
}
