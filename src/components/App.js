import React, { Component } from 'react';
import CategoryTab from './CategoryTab';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <header>はてぶ viewer</header>
        <div>
          <CategoryTab
            category={this.props.state.list.category}
            onAddItem={this.props.state.onAddItem}
          />
          <List
            itemData={this.props.state.list}
            onAddItem={this.props.state.onAddItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
