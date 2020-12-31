import React, { FC } from "react";
import { connect } from "react-redux";
import { addCount, jianCount } from "@/store/actions";

let Count: FC<any> = ({ count, number, onAddClick, onJianClick }) => {
  return (
    <div className="count-wrapper">
      <button onClick={onAddClick}>加</button>
      <span style={{ padding: "0 16px" }}>{count}</span>
      <button onClick={onJianClick}>减</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      dispatch(addCount());
    },
    onJianClick: () => {
      dispatch(jianCount());
    },
  };
};

Count = connect(mapStateToProps, mapDispatchToProps)(Count);

export default Count;
