import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  position: sticky;
  top: 0;
  z-index: 10;
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.text_primary + 20};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled(Link)`
  width: 100$;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  padding: 0 6px;
`;

const Logo = styled.img`
  height: 45px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  padding: 0 6px;
`;

const Navlink = styled(NavLink)`
  ${
    "" /* display: flex;
align-items: center; */
  }
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  transition: all 1s slide-in;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
  ${
    "" /* width: 100%;
  height: 100%; */
  }
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
`;

const TextButton = styled.div`
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <Logo src={LogoImg} />
          SeekFitness
        </NavLogo>

        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/tutorials">Tutorials</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        <UserContainer>
          <Avatar />
          <TextButton>Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
