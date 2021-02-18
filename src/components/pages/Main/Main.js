import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchId } from  '../../../actions/idActions';
import './Main.sass';

class Main extends Component {
  componentDidMount() {
    this.props.fetchId();
  }

  render() {
    return (
      <div>
        <div className='mainBackGround'>
          <div className='mainBackGround__leftSide'>
            asd
          </div>
          <div className='mainBackGround__rightSide'>
            fdsa
          </div>
        </div>
        Main{this.props.userId}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Main)