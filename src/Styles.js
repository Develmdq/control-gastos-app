import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  color: white;
  margin: 55px 0px;
  text-shadow: 1px 1px 4px #6600dd90;
`;

export const Body = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 20px;
  width: 15%;
  margin: 0px auto;
  text-align: center;

  @media only screen and (max-width: 600px) {
    & {
      width: 55vw;
    }
  }
`;

export const Body2 = styled(Body)`
  display: flex;
  flex-wrap: wrap;
  width: 68%;

  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
      flex-direction: column;
      flex-grow: 1;
    }
  }
`;

export const H2 = styled.h2`
  text-align: center;
  color: gray;
  margin: 5px 0px 25px 0px;
  text-shadow: 1px 1px 2px #6600cc40;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 70vw;
      height: 45px;
      margin: 15px 0px 15px 0px;
      border-radius: 10px;
      align-items: center;
      align-self: center;
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
  margin: 5px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    & {
      margin: 15px 0px 35px 0px;
      width: 56vw;
    }
  }
`;

export const Inputs = styled.div`
  width: 45%;
  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
    }
  }
`;

export const Outputs = styled.div`
  width: 55%;
  @media only screen and (max-width: 600px) {
    & {
      width: 90vw;
    }
  }
`;

export const Table = styled.table`
  margin: 0 auto;
`;

export const Tr = styled.tr`
  &:hover {
    background: black;
    color: white;
    font-weight: bold;
  }
`;
export const Th = styled.th`
  border-radius: 10px;
  background: #3e3e4b20;
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
  margin: 15px 30px;
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
