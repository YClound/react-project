import { connect } from "react-redux";
import { setVisibilityFilter } from "@/store/actions";
import FLink from "./FLink";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(FLink);

export default FilterLink;
