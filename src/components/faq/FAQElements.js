import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  background-color: white;
  border-radius: 1em;
  overflow: hidden;

  display: grid;
  grid-template-columns: 45% 55%;
`;

export const IllustrationSection = styled.section`
  position: relative;
`;

export const IllustrationBackground = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  top: -3.6em;
  left: -16em;
  transform: scale(1.8);
`;

export const Illustration = styled.img`
  width: 100%;
  position: absolute;
  top: 2em;
  left: -2em;
`;

export const IllustrationBox = styled.img`
  width: 100%;
  display: none;
`;

export const QuestionsSection = styled.section`
  padding: 1.2em;
`;

export const QuestionsTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  font-family: 'Kumbh Sans', sans-serif;
  color: ${({ theme }) => theme.text.desaturatedBlue};
`;

export const Questions = styled.div`
  margin-top: 3em;
`;
