import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Card, Grid, Typography, Button } from "@mui/material";

const membres = [
  {
    nom: "Bénit EDOUH-SEWA",
    poste: "COO (Chief Operating Officer).",
    infos: "Développeur Full-Stack.",
    image: "/images/ben.jpg",
    message:
      "KaraDigital est une opportunité unique d’élever la jeunesse africaine par la technologie. Rejoignez-nous et transformons le monde ensemble.",
  },
  {
    nom: "Hortense TCHONDA",
    poste: "CMO (Chief Marketing Officer) .",
    infos: "🎓 Étudiante en communication à l’Université de Kara",
    image: "/images/hortence.jpg",
    message:
      "Je m'engage aux côtés de la communauté KaraDigital pour valoriser nos talents, partager nos expériences et faire rayonner notre savoir-faire. Rejoignez-nous et construisons ensemble une communauté forte et dynamique !",
  },
  {
    nom: "Serge DOTSE",
    poste: "Marketing Manager.",
    infos: "🎓 Étudiant en Informatique à l’Université de Kara",
    image: "/images/se1.jpg",
    message:
      "Je crois en la puissance de la collaboration. KaraDigital est notre terrain d'innovation, d’inspiration et de réussite collective.",
  },
  {
    nom: "Nawaaf BAH-TRAORE",
    poste: "CFO (Chief Financial Officer).",
    infos: "🎓 Étudiant en Informatique à l’Université de Kara",
    image: "/images/nawwaf1.jpg",
    message:
      "Soutenir KaraDigital, c’est soutenir un avenir où la jeunesse devient actrice du changement grâce à la technologie.",
  },
  {
    nom: "Sanaaou BINIZI",
    poste: "Operations Coordinator .",
    infos: "🎓 Élève en classe de terminal",
    image: "/images/binizi.jpg",
    message:
      "KaraDigital m’offre une famille ambitieuse, prête à bâtir le futur. Chaque idée compte, chaque voix est entendue.",
  },
];

export default function ComiteSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleMessage = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

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
        <Typography variant="subtitle1">KARA DIGITAL</Typography>
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
                  mt={1}
                  sx={{
                    color: "#333",
                    maxHeight: 80,
                    overflowY: "auto",
                    fontSize: "0.85rem",
                    textAlign: "justify",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#ccc",
                      borderRadius: "2px",
                    },
                  }}
                >
                  {membre.infos}
                </Typography>

                <Box mt={2}>
                  <Button
                    onClick={() => toggleMessage(index)}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#005B5B",
                      borderColor: "#00B389",
                      "&:hover": {
                        borderColor: "#007777",
                        background: "#e0f7f7",
                      },
                    }}
                  >
                    {selectedIndex === index ? "Voir moins" : "Voir plus"}
                  </Button>

                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        key="message"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Typography
                          mt={2}
                          variant="body2"
                          sx={{
                            fontStyle: "italic",
                            fontSize: "0.85rem",
                            textAlign: "justify",
                            color: "#444",
                          }}
                        >
                          {membre.message}
                        </Typography>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.section>
  );
}
