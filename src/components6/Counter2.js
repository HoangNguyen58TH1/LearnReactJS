import React, { useState } from 'react';

export default function Counter2() {
  const [number, increase] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => increase(number + 1)}>
        Increse Number
      </button>
    </div>
  );
}
