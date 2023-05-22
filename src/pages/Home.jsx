import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Button } from '../components/ContactForm/ContactFormStyled';

import { WrapperHome, WrapperHome2, H1Home, LabelStyled } from './pagesStyled';

export const Home = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <WrapperHome>
      <H1Home 
 className="">Welcome to our homepage!</H1Home>
      {!isLoggedin ? (
        <WrapperHome2>
          <LabelStyled>We help people to be closer</LabelStyled>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button type="button">Please Log In</Button>
          </Link>
        </WrapperHome2>
      ) : (
        <WrapperHome2>
          <LabelStyled>Thank you for authorization!</LabelStyled>
          <Link to="/contacts" style={{ textDecoration: 'none' }}>
            <Button type="button">Your Phonebook</Button>
          </Link>
        </WrapperHome2>
      )}
    </WrapperHome>
  );
};

export default Home;
