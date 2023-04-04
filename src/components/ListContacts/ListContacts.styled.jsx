import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  justify-content: center;

  grid-gap: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 3px;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 20px;
  align-items: flex-end;
  display: flex;
`;

export const Btn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: auto;
  border-radius: 6px;
  padding: 10px 24px;
  background-color: #bb1212;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #070808;
  }
`;
