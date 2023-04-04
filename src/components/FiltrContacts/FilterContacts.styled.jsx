import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-left: 20px;
`;

export const Input = styled.input`
  display: flex;
  margin: 0 auto;
  margin-top: 15px;
  padding-left: 15px;
  height: 30px;
  width: 350px;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 3px;
  outline: none;

  &:hover,
  &:focus {
    border-color: #5297cc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
