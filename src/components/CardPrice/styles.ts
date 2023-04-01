import styled from "styled-components";

export const Container = styled.div`
  background: green;
  padding: 20px;
  border-radius: 0px 10px 10px 0px;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #fff;
`;

export const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 60px;
  margin: 60px auto;
  width: 50%;
  font-size: 18px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
