import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Fonction pour scroller jusqu'à une section spécifique
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Petite barre colorée en haut */}
      <Box sx={{ height: '6px', backgroundColor: '#00CFCF' }} />

      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(90deg, #005B5B, rgb(0, 191, 255))',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            {/* Logo / nom gauche */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: '1.4rem',
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              KARA - DIGITAL
            </Typography>

            {/* Liens de navigation */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button
                onClick={() => scrollToSection('hero')}
                sx={{
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { borderBottom: '2px solid #fff', borderRadius: 0 },
                }}
              >
                Accueil
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                sx={{
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { borderBottom: '2px solid #fff', borderRadius: 0 },
                }}
              >
                À propos
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                sx={{
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { borderBottom: '2px solid #fff', borderRadius: 0 },
                }}
              >
                Contact
              </Button>
              <Button
              href="https://chat.whatsapp.com/CSlHNzrstuTKZUPi5jm8vc"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': { borderBottom: '2px solid #fff', borderRadius: 0 },
              }}
              >
              Rejoindre KARA-DIGITAL
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;
