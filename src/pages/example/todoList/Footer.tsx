import React from "react";
import { Row } from "antd";
import FilterLink from "./FilterLink";

const Footer = () => (
  <Row style={{ padding: "8px 0", display: "flex", alignItems: "center" }}>
    <span>筛选条件：</span>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </Row>
);

export default Footer;
