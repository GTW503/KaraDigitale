import { motion } from "framer-motion";
import { Avatar, Card, Typography, Box, Grid } from "@mui/material";

function FondateurSection() {
  return (
    /* sa serais ici à revoir après/*/ 
    <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
  style={{
    minHeight: "100vh",
    padding: "4rem 1.5rem",
    backgroundImage: "linear-gradient(90deg, #005B5B, rgb(0, 191, 255))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  overflow: "hidden",
    }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Image + Avatar */}
        <Grid item xs={12} md={5} sx={{ position: "relative" }}>
          <motion.div
            animate={{ rotate: [0, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "8px solid #00B389",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <motion.img
              src="/images/1.jpg"
              alt="Décoration"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Avatar flottant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: -50,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          >
            <Avatar
              src="/images/b.jpg"
              sx={{
                width: 120,
                height: 120,
                border: "6px solid #fff",
                backgroundColor: "#fff",
                boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.4)",
              }}
            />
          </motion.div>
        </Grid>

        {/* Texte fondateur */}
        <Grid item xs={12} md={7}>
          <Box
            component={motion.div}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Rencontrer le fondateur
            </Typography>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                elevation={4}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  bgcolor: "white",
                  width: "fit-content",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#0e7490", fontWeight: "bold" }}
                >
                  Mr Kevin Essodom MEBA — CEO, Développeur d'application & Analyste Programmeur
                </Typography>
              </Card>
            </motion.div>

            <Typography variant="body1" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
              La Tech Community Kara Digital est une occasion unique de rassembler les passionnés
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
              et même les curieux autour d’une seule mission : créer, partager et faire
            </Typography>
            <Typography variant="body3" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
              grandir le numérique dans notre région.
            </Typography>

            <Typography variant="body4" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
            L'objectif de la communauté est d'offrir aux jeunes les moyens de transformer 
            </Typography>
            <Typography variant="body5" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
            leurs idées en projets concrets, à fort impact social et technologique.
            </Typography>

          </Box>
        </Grid>
      </Grid>
    </motion.section>
  );
}

export default FondateurSection;
