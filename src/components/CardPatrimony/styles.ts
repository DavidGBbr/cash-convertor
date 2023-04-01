import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px 0px 00px 10px;
  display: flex;
  flex-direction: column;
  height: 40%;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 23px;
  margin-bottom: 15px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid green;
  border-radius: 10px;
  font-size: 18px;
`;

export const Result = styled.h3`
  background: green;
  margin: 0px auto;
  padding: 10px;
  border-radius: 15px;
`;
