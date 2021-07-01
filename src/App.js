import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import styled from 'styled-components';
import FAQ from './components/faq';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  display: 100%;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <FAQ />
      </Container>
    </ThemeProvider>
  );
}
