import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionContainer, AccordionTitle, AccordionContent, AccordionButton, Divider } from './AccordionElements';

import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  const icon = open ? <MdExpandLess /> : <MdExpandMore />;

  return (
    <AccordionContainer>
      <AccordionTitle open={open} onClick={() => setOpen(!open)}>
        {title}
        <AccordionButton>{icon}</AccordionButton>
      </AccordionTitle>
      <AccordionContent open={open}>{content}</AccordionContent>
      <Divider />
    </AccordionContainer>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
