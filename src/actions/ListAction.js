import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';
const Actions = {
  addItem: function(url) {

    axios.get(url)
    .then((res) => {
      dispatcher.dispatch({
        type: 'ADD_ITEM',
        data: res.data.query.results.item
      });
    });

  }
};
export default Actions;
