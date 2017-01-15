import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  render() {
    if (this.props.itemData.item.length > 0) {
      return (
        <section>
          {
            this.props.itemData.item.map((val, index) => {
              return (
                <ListItem data={val} key={index} />
              );
            })
          }
        </section>
      );
    } else {
      return (
        <section></section>
      );
	}
  }
}

export default List;
