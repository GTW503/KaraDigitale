import React from 'react';
import { Box, Typography, Button, Container, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutSection = () => {
  return (

    <section id="about">
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(90deg, #005B5B, rgb(0, 191, 255))',
        color: '#fff',
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Texte avec animation */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // <-- rejoue à chaque scroll
            >
              <motion.div variants={fadeInUp} custom={1}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Tech community Kara
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} custom={2}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 'bold', mt: 3, lineHeight: 1.2 }}
                >
                  Qui sommes-nous <br /> en quelques mots ?
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} custom={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#006064',
                    fontWeight: 'bold',
                    mt: 4,
                    px: 4,
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: '#b2ebf2',
                    },
                  }}
                >
                  C’est quoi Kara - Digital ?
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} custom={4}>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Kara Digital, c’est une communauté tech dynamique
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} custom={5}>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  qui connecte les passionnés du numérique à Kara.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} custom={6}>
                <Typography variant="body1" sx={{ mt: 3 }}>
                  Fondée en 2025, la communauté a commencé par de petites rencontres
                  et échanges entre passionnés.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} custom={7}>
                <Typography variant="body2" sx={{ mt: 6, color: '#b2ebf2' }}>
                  comtechkara@outlook.com
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Image animée */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }} // <-- rejoue à chaque apparition
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Avatar
                  src="/images/im.jpg"
                  alt="Kara Digital Logo"
                  sx={{
                    width: { xs: 250, md: 300 },
                    height: { xs: 250, md: 300 },
                    bgcolor: 'white',
                    boxShadow: 6,
                    border: '4px solid white',
                  }}
                />
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </section>
  );
};

export default AboutSection;
