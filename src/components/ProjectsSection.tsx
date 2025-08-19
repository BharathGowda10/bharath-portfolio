import React from "react";
import { Box, Container, Typography, Chip, Button, Paper } from "@mui/material";
import chatapp from "../assets/chatapp.png";
import mapapp from "../assets/mapapp.png";
import todoapp from "../assets/todoapp.png";
import movieapp from "../assets/bmdb.png";
import proshop from "../assets/proshop.png";

const projects = [
  {
    name: "Proshop",
    description:
      "A E-commerce app, with admin/user authorization, handling api with rtk query",
    tech: [
      "MERN",
      "React",
      "Redux Toolkit",
      "Rtk Query",
      "Bootstrap"
    ],
    link: "https://pro-shop-grgj.onrender.com/",
    image: proshop,
  },
  {
    name: "Chat-app",
    description:
      "Real-time chat app with JWT auth, role-based authorization, Socket.IO, AI assistant, and image uploads.",
    tech: [
      "MERN",
      "Vite",
      "React",
      "DaisyUI",
      "TailwindCSS",
      "Socket.IO",
      "Zustand",
      "OpenAI API",
      "Cloudinary",
    ],
    link: "https://mern-chat-app-lnv3.onrender.com/",
    image: chatapp,
  },
  {
    name: "Todo-list-app",
    description:
      "Responsive To-Do app with real-time validation, due date highlighting, and Jest tests.",
    tech: ["React", "React Hook Form", "Bootstrap", "Day.js", "Jest"],
    link: "https://mern-todo-app-disr.onrender.com/",
    image: todoapp,
  },
  {
    name: "OMDB-movie-app",
    description:
      "Movie app using OMDB API, client-side routing, lazy loading, and Tailwind CSS.",
    tech: ["React", "React Router", "Tailwind", "OMDB API"],
    link: "https://bmdb-bharath.netlify.app/",
    image: movieapp,
  },
  {
    name: "Google-map-clone",
    description:
      "Interactive map interface using React, TypeScript, OSM API, and React-leaflet.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "OSM API",
      "React-leaflet",
    ],
    link: "https://map-typescript.vercel.app/",
    image: mapapp,
  },
];

// Color map for chip styling
const techColors: { [key: string]: string } = {
  React: "#6161fbff",
  Tailwind: "#38bdf8",
  Vite: "#a855f7",
  "React Hook Form": "#ec4899",
  "React Router": "#f97316",
  Bootstrap: "#7952b3",
  "OpenAI API": "#10b981",
  Cloudinary: "#3b82f6",
  "Socket.IO": "#8b5cf6",
  Zustand: "#facc15",
  TypeScript: "#3178c6",
  MERN: "#4ade80",
};

const ProjectsSection: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8fafc",
        color: "#1e293b",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Projects
        </Typography>
        <Typography align="center" sx={{ mb: 6, color: "#475569" }}>
          Explore a few of the projects I’ve worked on.
        </Typography>

        <Box
          className="carousel slide"
          id="projectCarousel"
          data-bs-ride="carousel"
          sx={{
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            borderLeft: "6px solid #6366f1", // Indigo border like Experience section
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={project.name}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    p: { xs: 3, md: 5 },
                    gap: 4,
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    height: { xs: "auto", md: 400 },
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 250,
                      maxWidth: 400,
                      height: { xs: 200, md: 300 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                      }}
                    />
                  </Box>

                  {/* Text Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#334155", mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: techColors[tech] || "#cbd5e1",
                            color: techColors[tech] || "#1e293b",
                            fontWeight: 500,
                            backgroundColor: "#f1f5f9",
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      sx={{
                        backgroundColor: "#6366f1", // Indigo
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#4f46e5",
                        },
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Paper>
              </div>
            ))}
          </div>

          {/* Custom Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
            style={{ filter: "brightness(0.4)" }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
            style={{ filter: "brightness(0.4)" }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
