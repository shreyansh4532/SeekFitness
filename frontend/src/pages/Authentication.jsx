import React from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Text = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};
    margin-top: 16px;
    @media (max-width: 400px) {
        font-size: 14px;
    }
`;

const TextButton = styled.span`
    color: ${({theme}) => theme.primary};
    transition: all 0.3s ease;
    font-weight: 600;
    cursor: pointer;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      {/* Left part will have image */}
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      {/* Right part will have form */}
      <Right>
        {login ? (
          <>
            <SignIn />
            <Text>Don't have an account? <TextButton onClick={() => setLogin(false)}>SignUp</TextButton></Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>Already have an account? <TextButton onClick={() => setLogin(true)}>SignIn</TextButton></Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
