import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import NoStyleLink from "components/NoStyleLink";

const NavTabs = ({ tabs, onChange, value, history }) => {
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={onChange}
      >
        {tabs.map(({ to, label }, index) => (
          <Tab
            label={label}
            onClick={event => {
              onChange(event, index);
              history.push(to);
            }}
          />
        ))}
      </Tabs>
    </Paper>
  );
};

export default withRouter(NavTabs);
