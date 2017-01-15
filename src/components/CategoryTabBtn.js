import React, { Component } from 'react';

class CategoryTabBtn extends Component {
  render() {
    console.log(this.props);
    return (
      <li key={this.props.cat}><span onClick={() => { this.props.onAddItem(this.props.url) }}>{this.props.name}</span></li>
    );
  }
}

export default CategoryTabBtn;
