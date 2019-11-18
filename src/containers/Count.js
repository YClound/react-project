import React from 'react'
import { connect } from 'react-redux'
import { addCount, jianCount } from '../store/actions'

let Count = ({ count, onAddClick, onJianClick }) => {
  return (
    <div className="count-wrapper">
      <button onClick={onAddClick}>加一</button>
      <span>{count}</span>
      <button onClick={onJianClick}>减一</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: () => {
      dispatch(addCount())
    },
    onJianClick: () => {
      dispatch(jianCount())
    }
  }
}

Count = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)

export default Count;


