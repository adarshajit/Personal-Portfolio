

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  Logo,
} from "./SidebarElements";

import { ASSETS } from "@constants/assets";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Logo src={ASSETS.LOGO} />
      <SidebarWrapper>
        <SidebarRoute exact to="/" onClick={toggle}>
          Home
        </SidebarRoute>
        <SidebarRoute to="/about" onClick={toggle}>
          About
        </SidebarRoute>
        <SidebarRoute to="/projects" onClick={toggle}>
          Projects
        </SidebarRoute>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
