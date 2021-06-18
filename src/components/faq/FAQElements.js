import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  background-color: white;
  border-radius: 1em;
  overflow: hidden;

  display: grid;
  grid-template-columns: 50% 50%;
  padding: 3em;
`;

export const IllustrationSection = styled.section`
  //border: 1px solid red;
  position: relative;
`;

export const IllustrationBackground = styled.img`
  position: absolute;
  display: none;
`;

export const Illustration = styled.img`
  position: absolute;
  margin-left: -110px;
`;

export const IllustrationBox = styled.img`
  position: absolute;
  display: none;
`;

export const QuestionsSection = styled.section``;

export const QuestionsTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  font-family: 'Kumbh Sans', sans-serif;
  color: ${({ theme }) => theme.text.desaturatedBlue};
`;

export const Questions = styled.div`
  margin-top: 3em;
`;
