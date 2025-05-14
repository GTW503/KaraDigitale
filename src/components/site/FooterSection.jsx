import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';




const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 }
  },
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const FooterSection = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        width: "100%",
        background: 'linear-gradient(90deg, #005B5B, rgb(0, 191, 255))',
        color: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 10 },
        mt: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="space-between">
        {/* Logo animé */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
              margin: "0 auto"
            }}
          >
            <motion.img
              src="/images/im.jpg"
              alt="Kara Digital"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <Typography
            variant="h5"
            textAlign="center"
            mt={2}
            fontWeight="bold"
            component={motion.div}
            initial="initial"
            whileInView="animate"
            variants={iconVariants}
            sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.4)' }}
          >
            Kara - Digital
          </Typography>
          <Typography
            textAlign="center"
            fontStyle="italic"
            component={motion.div}
            initial="initial"
            whileInView="animate"
            variants={iconVariants}
          >
            Penser Local, Agir Concret
          </Typography>
        </Grid>

        {/* Infos de contact animées */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {[
              {
                icon: <PhoneIcon />,
                label: "+228 93 82 66 77 / +228 92 68 85 09"
              },
              {
                icon: <EmailIcon />,
                label: (
                  <Link href="mailto:comtechkara@outlook.com" color="inherit" underline="hover">
                    comtechkara@outlook.com
                  </Link>
                )
              },
              {
                icon: <PersonIcon />,
                label: "@karadigital"
              },
              {
                icon: <LocationOnIcon />,
                label: "Kara, Tomdè"
              },
             
            ].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  component={motion.div}
                  variants={iconVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                >
                  {item.icon}
                  <Typography component="span">{item.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: 50 }}
      >
        <Typography
          textAlign="center"
          variant="body2"
          sx={{
            opacity: 0.9,
            fontSize: '0.95rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          © {new Date().getFullYear()} Kara-Digital. Tous droits réservés.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default FooterSection;
