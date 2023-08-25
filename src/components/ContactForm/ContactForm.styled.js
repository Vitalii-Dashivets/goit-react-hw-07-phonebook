import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 900px;
  padding: 20px;
  border: 3px solid rgba(216, 116, 225, 1);
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.8);
`;

export const InputStyle = styled.input`
  height: 30px;
  width: 200px;
  font-size: 20px;
  border: 2px solid rgba(216, 116, 225, 1);
  border-radius: 8px;
  margin-left: 20px;
  margin-right: auto;
`;
export const Label = styled.label`
  font-size: 30px;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  width: 100px;
  height: 50px;
  background-color: rgba(216, 116, 225, 0.8);
  font-size: 20px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: rgba(250, 100, 225, 1);
  }
`;
