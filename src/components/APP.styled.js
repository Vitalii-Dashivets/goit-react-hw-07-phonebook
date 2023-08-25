import styled from '@emotion/styled';

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: rgba(232, 116, 225, 0.2); */
  background-image: linear-gradient(
      rgba(50, 47, 66, 0.2),
      rgba(50, 47, 66, 0.2) 100%
    ),
    url('https://cdn.pixabay.com/photo/2015/11/10/14/33/hawaii-1037024_1280.jpg');
  background-size: cover;
  height: 100vh;
`;

export const TitleOne = styled.h1`
  font-size: 32px;
`;

export const TitleContacts = styled.h2`
  font-size: 32px;
`;
