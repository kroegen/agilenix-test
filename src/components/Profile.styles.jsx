import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  padding: 16px;
  background: #fff;
  margin-bottom: 20px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
`;

const Info = styled.div`
  margin: 10px 0px 5px 0px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin-top: auto;
`;

const Location = styled.div`
  margin-right: 10px;
`;

const Email = styled.div`
`;

const Login = styled.a`
  margin-right: 10px;
`;

export {
  Wrapper, Img, Body, Name, Header,
  Info, Footer, Location, Email, Login
};
