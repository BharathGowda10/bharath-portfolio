import React from "react";
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Stack,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import resume from "../assets/BharathS.CV.pdf";

const quickFacts = [
  "React Enthusiast",
  "UI/UX Focused",
  "3+ Years Experience",
  "Clean Code Advocate",
  "Team Player",
];

const NAVBAR_HEIGHT = 64;

const IntroSection: React.FC = () => (
  <Box
    id="about"
    sx={{
      minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #01025dff, #1f0263ff)",
      py: { xs: 6, md: 2 },
      px: 2,
    }}
  >
    <Paper
      elevation={4}
      sx={{
        maxWidth: 1100,
        width: "100%",
        p: { xs: 4, md: 6 },
        borderRadius: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 8,
        backgroundColor: "#ffffff", // clean white card
        color: "#1e293b", // Slate-800 text
      }}
    >
      {/* Left: Avatar and Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // gap: 1,
          textAlign: "center",
          minWidth: { md: 300 },
        }}
      >
        <Avatar
          src={profilePic}
          alt="Bharath S"
          sx={{
            width: 200,
            height: 200,
            marginBottom: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Bharath S
        </Typography>
        <Typography variant="h6" sx={{ color: "#475569" }}>
          Frontend Developer
        </Typography>

        {/* Social Links */}
        <Stack direction="row" spacing={2} mt={1}>
          <IconButton
            href="https://github.com/BharathGowda10"
            target="_blank"
            rel="noopener"
            sx={{ color: "#4f46e5" }}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener"
            sx={{ color: "#4f46e5" }}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            href="mailto:imbharathgowda10@gmail.com"
            sx={{ color: "#4f46e5" }}
          >
            <FaEnvelope />
          </IconButton>
        </Stack>
      </Box>

      {/* Right: Bio and CTA */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.15rem",
            mb: 3,
            lineHeight: 1.75,
            color: "#334155", // Slate-700
          }}
        >
          I’m a passionate frontend developer with 3+ years of experience
          building delightful, accessible, and responsive web applications. I
          value clean code, meaningful design, and collaborative teamwork to
          bring ideas to life.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {quickFacts.map((fact) => (
            <Chip
              key={fact}
              label={fact}
              variant="outlined"
              sx={{
                color: "#4f46e5", // Indigo-600
                borderColor: "#6366f1", // Indigo-500
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              color: "white",
              borderRadius: 2,
              fontWeight: 700,
              px: 3,
              "&:hover": {
                background: "linear-gradient(to right, #4f46e5, #7c3aed)",
              },
            }}
            href="#projects"
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            href={resume}
            target="_blank"
            sx={{
              borderColor: "#6366f1",
              color: "#4f46e5",
              borderRadius: 2,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#eef2ff",
              },
            }}
          >
            View Resume
          </Button>
        </Stack>
      </Box>
    </Paper>
  </Box>
);

export default IntroSection;
