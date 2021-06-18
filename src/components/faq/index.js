import React from 'react';
import Questions from '../../Questions';
import Accordion from '../accordion';
import { FaqContainer } from './FAQElements';

export default function FAQ() {
  return (
    <FaqContainer>
      {Questions.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </FaqContainer>
  );
}
