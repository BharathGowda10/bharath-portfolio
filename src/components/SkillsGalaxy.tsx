import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Chip,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const skillGroups = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "jQuery",
    "Webpack",
  ],
  Tools: ["Git", "GitHub", "GitHub Copilot", "VS Code", "Postman", "Webstorm"],
  Testing: ["Jest", "React Testing Library"],
  "Other Skills": [
    "RESTful APIs",
    "CI/CD",
    "Accessibility",
    "Agile",
    "Cross-Browser Compatibility",
    "Scrum",
  ],
};

const categoryKeys = Object.keys(skillGroups) as Array<
  keyof typeof skillGroups
>;

const SkillsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      id="skills"
      sx={{
        minHeight: "80vh",
        bgcolor: "linear-gradient(to right, #01025d, #1f0263)",
        background: "linear-gradient(to right, #01025d, #1f0263)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          my: 4,
          background: "linear-gradient(to right, #93c5fd, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons="auto"
        centered={!isMobile}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          mb: 4,
          "& .MuiTab-root": {
            color: "#cbd5e1",
            fontWeight: 500,
          },
          "& .Mui-selected": {
            color: "#fff",
          },
        }}
      >
        {categoryKeys.map((key) => (
          <Tab key={key} label={key} />
        ))}
      </Tabs>

      <Fade in timeout={500}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            marginTop: "2rem",
            maxWidth: "1000px",
            px: { xs: 1, sm: 2 },
          }}
        >
          {skillGroups[categoryKeys[selectedTab]].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              sx={{
                color: "#e0e7ff",
                borderColor: "#7c3aed",
                fontWeight: 500,
                px: 3,
                py: 3,
                fontSize: "1rem",
                backgroundColor: "rgba(255,255,255,0.06)",
                "&:hover": {
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                },
              }}
            />
          ))}
        </Box>
      </Fade>
    </Box>
  );
};

export default SkillsSection;
