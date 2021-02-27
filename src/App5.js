import React from 'react';
import List from './components5/List'
import Counter from './components5/Counter'
const data = ['Hoang', 'Nguyen', 'Van']

const App5 = () => {
  return (
    <div>
      <List data={data} render={(item) => <div>{item}</div>} />
      <List data={data} render={(item) => <div>-{item}</div>} />
      <List data={data} render={(item) => <div>+{item}</div>} />
      <Counter>
        { ({count}) => 
          <h1>{count}</h1> 
        }
      </Counter>
    </div>
  );
}

export default App5;
