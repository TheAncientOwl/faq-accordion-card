import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import styled from 'styled-components';
import FAQ from './components/faq';

const Container = styled.div`
  min-height: 100vh;
  //display: grid;
  //justify-content: center;
  //align-items: center;
  padding-top: 40px;
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
