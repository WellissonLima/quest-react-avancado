import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
  font-size: 2rem;
`;

export const Image = styled.img`
  display: block;
  margin: 20px auto;
  width: 150px;
  height: 150px;
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
