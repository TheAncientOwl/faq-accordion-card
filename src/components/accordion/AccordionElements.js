import styled, { css } from 'styled-components';

export const AccordionContainer = styled.div`
  font-family: 'Kumbh Sans', sans-serif;
`;

const TRANSITION_EFFECT = 'cubic-bezier(0.21, 1, 0.81, 1)';

export const AccordionTitle = styled.div(
  ({ open, theme }) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 400;
    color: ${theme.text.desaturatedBlue};
    transition: 150ms ${TRANSITION_EFFECT}, opacity 120ms ease-out;

    ${open &&
    css`
      font-weight: 700;
      color: ${theme.text.veryDarkGrayBlue};
      transition: 150ms ${TRANSITION_EFFECT}, opacity 120ms ease-in;
    `};

    &:hover {
      color: ${theme.text.softRed};
      transition: 150ms ${TRANSITION_EFFECT}, opacity 120ms ease-in;
    }
  `
);

export const AccordionButton = styled.div`
  margin: 0 0.7em;
  font-size: 1.2em;
  color: ${({ theme }) => theme.text.softRed};
`;

export const AccordionContent = styled.div(
  ({ theme, open }) => css`
    padding-right: 1.2em;
    font-size: 0.9em;
    color: ${theme.text.darkGrayBlue};
    transition: 150ms ${TRANSITION_EFFECT}, opacity 120ms ease-out;
    height: ${open ? '' : '0'};
    opacity: 0;

    ${open &&
    css`
      transition: 150ms ${TRANSITION_EFFECT}, opacity 120ms ease-in;
      margin-top: 0.6em;
      opacity: 1;
    `};
  `
);

export const Divider = styled.div`
  border-top: 0.1em solid ${({ theme }) => theme.divider};
  margin: 1em 0;
`;
