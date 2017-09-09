import React from 'react';
import {render} from 'react-dom';
import {CardComponent} from './CardComponent'

export class App extends React.Component {
  render() {
    return (
      <CardComponent> Hello React! </CardComponent>
    )
  }
}

render(<App />, document.getElementById('app'));
