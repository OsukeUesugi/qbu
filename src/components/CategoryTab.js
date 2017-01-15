import React, { Component } from 'react';
import CategoryTabBtn from './CategoryTabBtn';

class CategoryTab extends Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.category).map((key, index) => {
            return (
              <CategoryTabBtn
                name={this.props.category[key].name}
                cat={key}
                url={this.props.category[key].url}
                onAddItem={this.props.onAddItem}
              />
            );
          })
        }
      </ul>
    );
  }
}

export default CategoryTab;
