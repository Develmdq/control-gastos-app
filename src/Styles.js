import styled from "styled-components";

export const Body = styled.div`
margin: 0;
padding:0;
box-sizing: border-box;
`;

export const H1 = styled.h1`
  text-align: center;
  color: white;
  margin: 6rem 0rem 3rem 0rem;
  text-shadow: 1px 1px 4px #6600dd90;
  font-size: 4rem;

  @media only screen and (max-width: 600px) {
    & {
      margin: 3rem 0rem 3rem 0rem;
      font-size: 3rem;
    }
  }
`;

export const Main = styled.div`
  background: #E3E3F2;
  padding: 5px;
  border-radius: 10px;
  width: 20%;
  margin: 0px auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  box-shadow: 2px 2px 20px;

  @media only screen and (max-width: 600px) {
    & {
      width: 85vw;
    }
  }
`;

export const Main2 = styled(Main)`  
  width: 70%;
  justify-content:space-around;
  align-items: start;

  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
      flex-direction: column;
      flex-grow: 1;
    }
  }
`;

export const Inputs = styled.div`
  width: 45%;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  
  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
    }
  }
`;

export const Outputs = styled(Inputs)`
  width: 50%;
  
  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
    }
  }
`;

export const H2 = styled.h2`
  color: gray;
  text-shadow: 1px 1px 2px #6600cc40;
  background: #3e3e4b20;
  border-radius: 10px;
  font-size: 2rem;
  width: 90%;
  height:8vh;
  line-height: 75px;

  &:hover {
    color: black;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 99%;
      border-radius: 10px;
      margin: 10px 10px 0px;
      font-size: 1.5rem;
      line-height: 50px;
    }
  }
`;

export const Input = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
`;

export const InputBtn = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ ok }) => (ok ? "#3e3e4b20" : "#3e3e4b")};
  cursor: ${({ ok }) => (ok ? "no-drop" : "pointer")};
  color: white;
  padding: 5px;
  margin: 25px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    & {
      margin: 15px 0px 35px 0px;
      width: 56vw;
    }
  }
`;

export const Table = styled.table`
  border-spacing: 8px 8px;
  width: 93%;
  height: 15%;
`;

export const Tr = styled.tr`
  background:#3e3e4b20;
  
  
  &:hover {
    background: black;
    color: white;
    font-weight: bold;
  }
`;

export const Th = styled.th`
  border-radius: 10px;
  background: #3e3e4b60;
  height: 35px;
  width: ${({ width }) => width};
`;

export const Td = styled.td`
  border-radius: 8px;
  width: ${({ width }) => width};
  height: 30px;
  text-align: ${({ textAlign }) => textAlign};
  padding: 0px 20px;
`;

export const P = styled.p`
  background: ${({ background }) => background};
  display: inline-flex;
  margin: 0px 10px 25px;
  width: 38%;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    & {
      width: 60vw;
      margin: 10px auto;
    }
  }
`;

export const Span = styled.span`
color: ${({color})=>color};
`;
