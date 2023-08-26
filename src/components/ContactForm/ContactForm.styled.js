import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 900px;
  padding: 20px;
  /* border: 3px solid rgba(216, 116, 225, 1); */
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
  font-style: italic;
`;

export const InputStyle = styled.input`
  height: 30px;
  width: 200px;
  font-size: 20px;
  padding: 0 10px;
  border: 2px solid pink;
  border-radius: 17px;
  margin-left: 20px;
  margin-right: auto;
  &:focus {
    outline-color: blue;
  }
`;
export const Label = styled.label`
  font-size: 30px;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  /* height: 50px; */
  background-color: pink;
  font-size: 20px;
  border-radius: 25px;
  border: none;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover {
    background-color: rgba(250, 100, 225, 1);
  }
`;
