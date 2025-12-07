import { ASSETS } from "@constants/assets";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarRoute,
  Logo,
} from "./SidebarElements";


const Sidebar = ({ isOpen, toggle }) => {

  const handleSidebarClick = (e) => {
    e.stopPropagation();
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={handleSidebarClick}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Logo src={ASSETS.LOGO} />
        <SidebarRoute exact to="/" onClick={handleSidebarClick}>
          Home
        </SidebarRoute>
        <SidebarRoute to="/about" onClick={handleSidebarClick}>
          About
        </SidebarRoute>
        <SidebarRoute to="/projects" onClick={handleSidebarClick}>
          Projects
        </SidebarRoute>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
