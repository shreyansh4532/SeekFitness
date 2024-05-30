import styled from "styled-components";
import { counts } from "../utils/data.jsx";
import CountsCard from "../components/cards/CountsCard";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1400px;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0 16px;
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const FlexWrap = styled.div`
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
        {counts.map((item) => (
          <CountsCard item={item}/>
        ))}
          
        </FlexWrap>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
