import React from 'react';
import { Component } from 'react';
import List from './list';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello World</h1>
        </header>
        <List />
      </div>
    );
  }
}
