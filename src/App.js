import { ThemeProvider } from 'styled-components';
import Accordion from './components/accordion';
import Theme from './Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div
        style={{
          paddingTop: '70px',
          minHeight: '60vh',
          width: '30vw',
          margin: '0 auto',
        }}>
        <Accordion
          title={'What is the maximum file upload size?'}
          content={'No more than 2GB. All files in your account must fit your alloted storage space.'}
        />
      </div>
    </ThemeProvider>
  );
}
