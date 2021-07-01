import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  background-color: white;
  border-radius: 1em;

  display: grid;
  grid-template-columns: 45% 55%;
`;

export const IllustrationSection = styled.section`
  overflow: hidden;
  position: relative;
`;

export const IllustrationBackground = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  left: -19em;
  transform: scale(2.3);
`;

export const Illustration = styled.img`
  width: 100%;
  position: absolute;
  top: 5em;
  left: -2em;
  transform: scale(1.1);
`;

export const IllustrationBox = styled.img`
  top: 11em;
  left: -5em;
  transform: scale(0.7);
  position: absolute;
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
