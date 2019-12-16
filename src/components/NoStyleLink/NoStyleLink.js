import React from "react";
import { Link } from "react-router-dom";

const NoStyleLink = props => {
  return (
    <Link {...props} style={{ textDecoration: "none", color: "inherit" }} />
  );
};

export default NoStyleLink;
