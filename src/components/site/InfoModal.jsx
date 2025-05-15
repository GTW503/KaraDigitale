import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Framer Motion wrapper
const MotionBox = motion(Box);

const InfoModal = ({ open, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Fermer au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) onClose();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.7, rotateX: -15 },
        animate: { opacity: 1, scale: 1, rotateX: 0 },
        exit: { opacity: 0, scale: 0.8, rotateX: -10 },
        transition: { duration: 0.6, ease: 'easeInOut' },
        sx: {
          background: 'linear-gradient(90deg, #005B5B,rgb(0, 191, 255))',
          color: '#fff',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          borderRadius: 4,
          overflow: 'hidden',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 2, md: 4 } }}>
        {/* Bouton de fermeture */}
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Contenu animé */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" fontWeight={800} gutterBottom>
            🌍 À propos de KARA - DIGITAL
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            🚀 <strong>KARA - DIGITAL</strong> est une initiative engagée à numériser notre avenir,
            en développant des solutions locales par des talents locaux.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            💡 Nous proposons des formations intensives, du mentorat, de la création de sites/applications,
            du design UX/UI et des projets communautaires innovants.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            🧠 Nos pôles : Web, Mobile, IA, Cybersécurité, Design, Éducation numérique et Événementiel Tech.
          </Typography>

          <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic', color: '#e0f2f1' }}>
            “Penser local, agir concret. Nous bâtissons un futur numérique inclusif.”
          </Typography>
        </MotionBox>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
