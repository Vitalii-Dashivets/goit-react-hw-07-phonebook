import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  margin: 0;

  display: flex;
  /* width: 800px; */
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
`;
export const ButtonStyle = styled.button`
  display: inline-block;
  width: 100px;
  height: 50px;
  background-color: rgba(216, 116, 225, 0.6);
  font-size: 20px;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: rgba(250, 100, 225, 1);
  }
`;
export const Name = styled.p`
  width: 380px;
`;

export const Number = styled.p`
  margin-right: auto;
`;
