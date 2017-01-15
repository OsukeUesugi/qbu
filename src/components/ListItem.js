import React, { Component } from 'react';

class ListItem extends Component {
  render() {
//console.log((new Date()).getTime());
    return (
      <a href={this.props.data.link} target="_blank">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.bookmarkcount}</p>
      </a>
    );
  }
}

export default ListItem;
