import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0 20px;
  margin: 0;
  overflow-y: scroll;
  height: calc(100vh - 450px);
`;
export const ListContainer = styled.div`
  width: 900px;
  height: calc(100vh - 440px);
  padding: 5px;
  /* border: 3px solid rgba(216, 116, 225, 1); */
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  box-shadow: 2px 3px 3px 2px rgba(20, 20, 20, 0.5);
`;
export const Message = styled.p`
  text-align: center;
  font-size: 30px;
`;
