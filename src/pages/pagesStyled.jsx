import styled from '@emotion/styled';

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;

  border: 3px solid black;
  border-radius: 5px;
  padding: 16px;
  min-width: 60vh;
  max-width: 60vh;
  margin-bottom: 24px;
`;

export const InputContainers = styled.div`
  gap: 16px;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-bottom: 24px;
`;

export const LabelStyled = styled.label`
  font-size: 24px;
  text-align: center;
`;

export const InputStyled = styled.input`
  background-color: (rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) ;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  transition: box-shadow 0.3s ease;

  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #0080ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #0022cc;
  }
`;

export const H1Home = styled.h1`
  text-align: center;
`;
export const H2Home = styled.h2`
  text-align: center;
`;
export const WrapperHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`;

export const WrapperHome2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;