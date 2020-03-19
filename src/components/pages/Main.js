import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchId } from  '../../actions/idActions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchId();
  }

  render() {
    return (
      <div>
        Main{this.props.userId}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Main)