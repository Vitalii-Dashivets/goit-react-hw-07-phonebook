import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  margin: 0;
  padding: 15px 0;
  display: flex;
  /* width: 800px; */
  justify-content: space-between;
  align-items: center;
  font-style: italic;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 2px solid black;

  /* background-color: rgba(200, 210, 210, 0.7);
  &:nth-child(2n + 1) {
    background-color: rgba(200, 220, 220, 0.7);
  } */
`;
export const ButtonStyle = styled.button`
  padding: 5px 25px;
  display: flex;
  align-items: center;
  background-color: pink;
  /* font-size: 20px; */
  border: none;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.5);
  &:hover {
    background-color: rgba(250, 100, 225, 1);
  }
`;
export const Name = styled.p`
  width: 380px;
  margin: 0;
`;

export const Number = styled.p`
  margin-right: auto;
  margin: 0;
`;
