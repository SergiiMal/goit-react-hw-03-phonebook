import { Form, Field } from 'formik';
import styled from 'styled-components';

export const Forms = styled(Form)`
  border-bottom: 2px solid rgb(135, 136, 145);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  margin-left: 35px;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 25px;
  width: 180px;
  padding-left: 10px;
  display: flex;
  outline: none;
  border: 1px solid rgb(189, 189, 189);
  &:hover,
  &:focus {
    border-color: #38a162;
  }
`;

export const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;

  margin-left: auto;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #38a162;
  color: white;
  font-weight: 500;
`;
