import React from "react";
import { motion } from "framer-motion";
import { Box, Card, Grid, Typography } from "@mui/material";

const membres = [
  {
    nom: "Bénit EDOUH-SEWA",
    poste: "Vice président.",
    infos: "+++++++ infos sur lui",
    image: "/images/a.jpg",
  },
  {
    nom: "Serge DOTSE",
    poste: "Responsable marketing.",
    infos: "+++++++ infos sur lui",
    image: "/images/b.jpg",
  },
  {
    nom: "Hortense TCHONDA",
    poste: "Responsable communication.",
    infos: "++++++ infos sur elle",
    image: "/images/a.jpg",
  },
  {
    nom: "Sanaaou BINIZI",
    poste: "Secrétaire.",
    infos: "++++++ infos sur lui",
    image: "/images/a.jpg",
  },
  {
    nom: "Nawaaf BAH-TRAORE",
    poste: "Trésorier.",
    infos: "++++++ infos sur lui",
    image: "/images/a.jpg",
  },
];

export default function ComiteSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "linear-gradient(90deg, #005B5B, rgb(0, 191, 255))",
        color: "white",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold">
          Comités exécutif
        </Typography>
        <Typography variant="subtitle1">Tech Community Kara</Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {membres.map((membre, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                zIndex: 10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              style={{ perspective: 1000 }}
            >
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  bgcolor: "#ffffff",
                  borderRadius: 4,
                  boxShadow: 6,
                  color: "#005B5B",
                  height: "100%",
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    mb: 2,
                    borderRadius: "50%",
                    border: "4px solid #00B389",
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={membre.image}
                    alt={membre.nom}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    viewport={{ once: false }}
                  />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {membre.nom}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {membre.poste}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  sx={{ color: "#333" }}
                >
                  {membre.infos}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.section>
  );
}
