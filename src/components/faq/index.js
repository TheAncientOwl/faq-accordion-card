import React from 'react';
import QuestionsData from '../../QuestionsData';
import Accordion from '../accordion';
import {
  Container,
  IllustrationSection,
  IllustrationBackground,
  Illustration,
  IllustrationBox,
  QuestionsSection,
  QuestionsTitle,
  Questions,
} from './FAQElements';
import BackgroundSrc from '../../images/bg-pattern-desktop.svg';
import IllustrationSrc from '../../images/illustration-woman-online-desktop.svg';
import BoxSrc from '../../images/illustration-box-desktop.svg';

export default function FAQ() {
  return (
    <Container>
      <IllustrationSection>
        <IllustrationBackground src={BackgroundSrc} alt='background' />
        <Illustration src={IllustrationSrc} alt='illustration woman online' />
        <IllustrationBox src={BoxSrc} alt='illustration box' />
      </IllustrationSection>

      <QuestionsSection>
        <QuestionsTitle>FAQ</QuestionsTitle>
        <Questions>
          {QuestionsData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </Questions>
      </QuestionsSection>
    </Container>
  );
}
