import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(to right, #01025d, #1f0263)",
        color: "#f8fafc",
        position: "relative",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Glass card */}
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          p: { xs: 4, md: 6 },
          maxWidth: 700,
          mx: "auto",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: "center",
            letterSpacing: 1,
            textShadow: "0 0 10px #6366f1",
          }}
        >
          🚀 Let's Connect
        </Typography>

        <Stack spacing={3}>
          <ContactRow
            icon={<PhoneIcon />}
            label="Phone"
            value="+91 74836 69811"
          />
          <ContactRow
            icon={<EmailIcon />}
            label="Email"
            value="imbharathgowda10@gmail.com"
          />
          <ContactRow
            icon={<LocationOnIcon />}
            label="Location"
            value="Bengaluru, India"
          />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <IconButton
            component="a"
            href="https://github.com/BharathGowda10"
            target="_blank"
            sx={iconStyles}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/bharath-gowda-0055852aa/"
            target="_blank"
            sx={iconStyles}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Decorative wave */}
      <Box
        component="svg"
        viewBox="0 0 1440 200"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          transform: "translateY(50%)",
          zIndex: -1,
        }}
      >
        <path
          fill="#0f172a"
          fillOpacity="1"
          d="M0,192L80,160C160,128,320,64,480,80C640,96,800,192,960,186.7C1120,181,1280,75,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Box>
    </Box>
  );
};

const ContactRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Box sx={{ color: "#38bdf8", fontSize: 28 }}>{icon}</Box>
    <Box>
      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {value}
      </Typography>
    </Box>
  </Stack>
);

const iconStyles = {
  color: "#f8fafc",
  border: "1px solid #334155",
  borderRadius: "50%",
  p: 1.2,
  transition: "0.3s ease",
  "&:hover": {
    color: "#38bdf8",
    backgroundColor: "#1e293b",
    transform: "scale(1.1)",
  },
};

export default ContactSection;
