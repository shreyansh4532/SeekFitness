import React from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";

const Container = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  @media (max-width: 700px) {
    display: none;
  };
  position: relative;
`;

const Logo = styled.img`
  flex: 1;
  position: absolute;
  width: 60px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  postion: relative
  object-fit: cover
`;

const Right = styled.div`
  flex: 1;
`;

const Authentication = () => {
  return (
    <Container>
      {/* Left part will have image */}
      <Left>
        <Logo src={LogoImage}/>
        <Image src={AuthImage}/>
      </Left>
      {/* Right part will have form */}
      <Right></Right>
    </Container>
  );
};

export default Authentication;
