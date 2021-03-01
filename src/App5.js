import React from 'react';
// import List from './components5/List'
// import Counter from './components5/Counter'
import { NumberProvider } from './context5/NumberContext'
import RandomNumber from './components5/RandomNumber'

// const data = ['Hoang', 'Nguyen', 'Van']

const App5 = () => {
  return (
    <NumberProvider>
      <div>
        {/* <List data={data} render={(item) => <div>{item}</div>} /> */}

        <RandomNumber />
        
        {/* <Counter>
          { ({count}) => 
            <h1>{count}</h1> 
          }
        </Counter> */}
      </div>
    </NumberProvider>
  );
}

export default App5;
