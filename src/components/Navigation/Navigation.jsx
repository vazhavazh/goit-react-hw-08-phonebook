import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import {
  Header,
  Span,
  LogoutButton,
  WelcomeContainer,
} from './NavigationStyled';

export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  return (
    <Header>
      <WelcomeContainer>
        <Link to="/" className="my-link3">
          Home
        </Link>
        {isLoggedin && (
          <Link to="/contacts" className="my-link">
            Phonebook
          </Link>
        )}
      </WelcomeContainer>

      {!isLoggedin ? (
        <WelcomeContainer>
          <Link to="/login" className="my-link">
            Log In
          </Link>
          <Link to="/register" className="my-link2">
            Registration
          </Link>
        </WelcomeContainer>
      ) : (
        <WelcomeContainer>
          <Span>Welcome, {name}</Span>
          <LogoutButton
            type="button"
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Log Out
          </LogoutButton>
        </WelcomeContainer>
      )}
    </Header>
  );
};
