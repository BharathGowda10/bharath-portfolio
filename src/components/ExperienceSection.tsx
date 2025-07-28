import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

const ExperienceSection: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: "#f1f5f9", // light slate background
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ textAlign: "center", color: "#1e293b" }}
        >
          Experience
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            borderLeft: "6px solid #6366f1", // accent indigo border
            backgroundColor: "#ffffff",
          }}
        >
          <Stack spacing={1} mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Tata Consultancy Services (TCS)
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#475569", fontWeight: 500 }}
            >
              Associate System Engineer &mdash; <i>Aug 2022 – Present</i>
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748b" }}>
              Client: American Express (Banking Sector Project)
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <List sx={{ pl: 2 }}>
            {[
              "Developed and maintained responsive, reusable components with strong adherence to design and accessibility standards.",
              "Integrated RESTful APIs using Axios and handled complex asynchronous flows using Redux Thunks.",
              "Reduced form-related bugs by 40% using React Hook Form for structured validation.",
              "Collaborated with cross-functional teams (backend, QA, UX) in an Agile environment to deliver high-quality features on time.",
              "Converted Figma designs into pixel-perfect UI using Bootstrap and One app.",
              "Optimized large data tables by reducing render time up to 25% through memoization, code splitting, and lazy loading techniques.",
              "Delivered 15+ features and enhancements across 4 major sprints with 100% on-time delivery.",
              "Ensured 100% responsiveness and cross-browser compatibility across all user-facing pages.",
              "Maintained 100% unit test coverage for all components using Jest and React Testing Library.",
            ].map((point, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ mb: 1, alignItems: "flex-start" }}
              >
                <ListItemText
                  primary={`• ${point}`}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "0.95rem",
                      color: "#334155", // Slate-700
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
