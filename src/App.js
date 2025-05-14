import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/site/Header';
import HeroSection from './components/site/HeroSection';
import AboutSection from './components/site/AboutSection';
import FondateurSection from './components/site/FondateurSection';
import ComiteSection from './components/site/ComiteSection';
import CompositionSection from './components/site/CompositionSection';
import FooterSection from './components/site/FooterSection';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <AboutSection />
      <FondateurSection />
      <ComiteSection />
      <CompositionSection />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;