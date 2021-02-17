import React, { Component } from 'react';
import { Button, ButtonToggle } from 'reactstrap';

class App2 extends Component {
  render() {
    return (
    <div className="App2"> 
      <Button disabled color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button active color="success">success</Button>{' '}
      <Button size="lg" color="info">info</Button>{' '}
      <Button size="sm" block color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <ButtonToggle color="danger">danger</ButtonToggle>{' '}
      <Button color="link">link</Button>
    </div>
  );
  }
}

export default App2;
