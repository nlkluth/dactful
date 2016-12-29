import React from 'react';
import LoadingList from './LoadingList';
import ListingView from './ListingView';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: [{
          collapsed: true,
          tasks: [1, 2, 3]
        }, {
          collapsed: true,
          tasks: [1, 2, 3]
        }, {
          collapsed: false,
          tasks: [1, 2, 3]
        }],
        loading: false
      });
    }, 2000);
  }

  render() {
    if (!this.state.list.length && this.state.loading) {
      return <LoadingList />;
    }

    return <ListingView list={this.state.list} />;
  }
}

export default Listing;
