import React from "react";

import styled, { css } from "styled-components";
import {
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "../Pdashboard/PdashboardElements";
const Psidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Patdetail">Patient's Details</SidebarLink>
          <br></br>
          <SidebarLink to="/accessPrec">Access Record</SidebarLink>
          <br></br>
          <SidebarLink to="/graRev">Grant access</SidebarLink>
          <br></br>
          <SidebarLink to="/Rev">Revoke Access</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </>
  );
};

export default Psidebar;
