import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = ({ content }) => {
  return <HeaderContainer>{content}</HeaderContainer>;
};

export default Header;
