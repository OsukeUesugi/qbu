import React, {Component} from 'react';
import App from '../components/App';
import {Container} from 'flux/utils';
import ListStore from '../stores/ListStore';
import ListAction from '../actions/ListAction';

class AppContainer extends Component {
  static getStores() {
    return [
      ListStore
    ];
  }

  static calculateState(prevState) {
    return {
      list: ListStore.getState(),
	  onAddItem: ListAction.addItem,
	  //onDecrement: Actions.decrement
    };
  }

  componentDidMount() {
    ListAction.addItem(this.state.list.category[this.state.list.init].url);
  }

  render() {
    return (
      <App state={this.state} />
    );
  }
}

export default Container.create(AppContainer);
