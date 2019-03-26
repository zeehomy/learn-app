import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Tabs from './Tabs';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: '1', name: 'Cras justo odi' },
        { id: '2', name: 'Dapibus ac facilisis in' },
        { id: '3', name: 'Morbi leo risus' },
        { id: '4', name: 'Porta ac consectetur ac' },
        { id: '5', name: 'Vestibulum at eros' },
      ]
    };
    
  }
  
  render() {
    let items = this.state.items;
    return (
      <div className="items-tabs-panel">
        <ul>
          <FlipMove>
            {
              items.map((item, index) => (
                <li key={item.id} className="list-group-item">
                  <div className="name">{item.name}</div>
                  <div className="btn-group">
                    {
                      index > 0 ? 
                        <button className="btn btn-primary" onClick={() => this.move(index, -1)}>Up</button> : null
                    }
                    {
                      index < items.length - 1 ? 
                        <button className="btn btn-dark" onClick={() => this.move(index, 1)}>Down</button> : null
                    }
                  </div>
                </li>
              ))
            }
          </FlipMove>
        </ul>
        <Tabs></Tabs>
      </div>
    )
  }
  
  move(index, diff) {
    let items = this.state.items;
    let item = items[index];
    items.splice(index, 1);
    items.splice(index + diff, 0, item);
    this.setState({ items: items });
  }
}

export default App;
