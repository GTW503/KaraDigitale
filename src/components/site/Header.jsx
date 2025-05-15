import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Petite barre colorée en haut */}
      <Box sx={{ height: '6px', backgroundColor: '#00CFCF' }} />

      <AppBar position="fixed" sx={{ background: 'linear-gradient(90deg, #005B5B,rgb(0, 191, 255))', boxShadow: 'none' }}>
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;
