import React, { FC } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

interface IFlink {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const FLink: FC<IFlink> = ({ active, children, onClick }) => {
  if (active) {
    return (
      <Button type={"primary"} style={{ marginRight: "8px" }}>
        {children}
      </Button>
    );
  }

  return (
    <Button style={{ marginRight: "8px" }} onClick={onClick}>
      {children}
    </Button>
  );
};

FLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FLink;
