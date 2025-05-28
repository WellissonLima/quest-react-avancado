import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 32px;
  max-width: 900px;
  margin: 0 auto;
  background-color: rgba(220, 220, 220, 0.8);
  border-radius: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightColumn = styled.div`
  flex: 2;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
  font-size: 2rem;
  margin-top: 12px;
`;

export const Image = styled.img`
  display: block;
  margin: 20px auto;
  min-width: 150px;
  min-height: 150px;
  object-fit: contain;
`;

export const Section = styled.section`
  margin-top: 32px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.4;
  }
`;

export const MovesList = styled.ul`
  columns: 2;

  @media (max-width: 600px) {
    columns: 1;
  }
`;
