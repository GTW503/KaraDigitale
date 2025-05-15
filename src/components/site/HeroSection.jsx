import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import InfoModal from './InfoModal'; // Assure-toi que ce chemin est correct

const HeroSection = () => {
  const title = "KARA - DIGITAL".split(" ");
  const [open, setOpen] = useState(false);

  return (

    <section id="hero"> 
    <Box
      sx={{
        background: 'linear-gradient(90deg, #005B5B,rgb(0, 191, 255))',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        py: 10,
      }}
      id="hero"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '300px',
                  mx: 'auto',
                  mb: 6,
                  overflow: 'visible',
                }}
              >
                {/* Cadre circulaire animé */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    border: '8px solid #00B389',
                    overflow: 'hidden',
                  }}
                >
                  <motion.img
                    src="images/a.jpg"
                    alt="Team working"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </motion.div>

                {/* Avatar flottant */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Avatar
                    src="images/b.jpg"
                    sx={{
                      position: 'absolute',
                      bottom: -45,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 150,
                      height: 150,
                      border: '6px solid #fff',
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </motion.div>
              </Box>
              

              <Box textAlign="center" mt={2}>
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  comtechkara@outlook.com
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ pl: { xs: 2, md: 8 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    background: '#fff',
                    color: '#007C91',
                    display: 'inline-block',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Bienvenue à
                </Typography>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    color: '#fff',
                    mb: 3,
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {title.map((word, i) => (
                    <motion.span
                      key={i}
                      style={{ display: 'inline-block', marginRight: '0.3em' }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </Typography>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <Typography variant="h5" sx={{ mb: 1.5, color: '#e0f2f1' }}>
                    Créer, innover, apporter des solutions
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5, color: '#e0f2f1' }}>
                    à la communauté locale grâce à la technologie.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontStyle: 'italic', mb: 4, color: '#b2dfdb' }}
                  >
                    Penser local, agir concret
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setOpen(true)}
                    sx={{
                    backgroundColor: '#00D68F',
                    color: '#fff',
                    fontWeight: 'bold',
                    px: 4,
                    borderRadius: '30px',
                    textTransform: 'none',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                    backgroundColor: '#00B378',
                    transform: 'scale(1.05)',
                    },
                    }}
                    >
                    En savoir plus
                    </Button>

                  <InfoModal open={open} onClose={() => setOpen(false)} />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </section>
  );
};

export default HeroSection;
