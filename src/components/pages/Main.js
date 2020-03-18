import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchId } from  '../../actions/idActions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchId();
  }

  activateLasers(){
    console.log(mapStateToProps)
  }

  render() {
    return (
      <div onClick={this.activateLasers}>
        Main
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId.items
})

export default connect(mapStateToProps, { fetchId })(Main)