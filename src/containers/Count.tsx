import React, { FC } from 'react'
import { connect } from 'react-redux'
import { addCount, jianCount } from '../store/actions'

let Count: FC<any> = ({ count, number, text, onAddClick, onJianClick }) => {
  return (
    <div className="count-wrapper">
      <button onClick={onAddClick}>加一</button>
      <span>{count} + {number}</span>
      <button onClick={onJianClick}>减一</button>

      <div>{text}</div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'ownProps')
  return {
    ...ownProps,
    number: 20,
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


