import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const CompositionSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #005B5B, rgb(0, 191, 255))',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Texte à gauche */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            mb={3}
            sx={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Composition de la communauté
          </Typography>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: 'white',
              color: '#005B5B',
              display: 'inline-block',
              px: 3,
              py: 1,
              fontWeight: 600,
              borderLeft: '6px solid #00e0aa',
              borderRadius: '6px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              mb: 3,
              transition: '0.3s ease',
            }}
          >
            De qui et quoi se compose la communauté ?
          </Typography>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body1"
            color="white"
            fontSize="1.1rem"
            maxWidth={600}
            mb={4}
            lineHeight={1.8}
          >
            La communauté est constituée d’étudiants en développement
            (front-end, back-end, full stack,...), en cybersécurité, réseaux,
            communication, économie, de professionnels affiliés à ces domaines,
            même de lycéens et de toute entité, groupe ou personne intéressée
            par la cause.
          </Typography>
        </motion.div>
      </motion.div>

      {/* Image stylisée à droite */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{
            width: 280,
            height: 280,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0px 15px 30px rgba(0,0,0,0.4)',
            border: '5px solid white',
          }}
        >
          <motion.img
            src="/images/im.jpg"
            alt="Kara Digital"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default CompositionSection;
