import React from 'react';
// import List from './components5/List'
// import Counter from './components5/Counter'
import NumberProvider from './components5/NumberProvider'
import NumberContext from './context5/NumberContext'

const data = ['Hoang', 'Nguyen', 'Van']

const App5 = () => {
  return (
    <NumberProvider>
      <div>
        {/* <List data={data} render={(item) => <div>{item}</div>} /> */}

        <NumberContext.Consumer>
          {({ number, updateNumber }) => <div>
            <h1>{ number }</h1>
            <button onClick={updateNumber}>Update Number</button>
          </div> }
        </NumberContext.Consumer>
        
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
