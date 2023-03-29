import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';



export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  return (
    <header className="">
      <div>
        <Link to="/">Home</Link>
        {isLoggedin && <Link to="/contacts">Phonebook</Link>}
      </div>

      {!isLoggedin ? (
        <div>
          <Link to="/login">log In</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className="">
          <span>Welcome, {name}</span>
          <button
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};
