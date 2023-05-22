import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  align-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;

  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;
export const Span = styled.span`
  font-size: 18px;
`;



export const WelcomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const LogoutButton  = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #c82333;
  }
`;