import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import resume from "../assets/BharathS.CV.pdf";
import profileLogo from "../assets/profile-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          borderBottom: "1px solid #ebeef3ff",
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 6 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo and Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={profileLogo}
              alt="logo"
              sx={{
                width: 64,
                height: 64,
                position: "absolute",
                top: "-8px",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h5"
              component="a"
              href="#hero"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: "1.5rem",
                lineHeight: 1.2,
                marginLeft: "65px",
              }}
            >
              Bharath S
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#1e293b",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
              <Button
                href={resume}
                download
                variant="outlined"
                sx={{
                  borderColor: "#6366f1",
                  color: "#f8fafc",
                  borderRadius: 2,
                  fontWeight: 600,
                  px: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1e293b",
                    borderColor: "#6366f1",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              size="large"
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            width: 240,
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Navigation
          </Typography>
          <Divider sx={{ borderColor: "#334155", mb: 2 }} />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  sx={{
                    borderRadius: 1,
                    px: 2,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#1e293b",
                    },
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: "#334155" }} />

          {/* Download CV Button in Drawer */}
          <Button
            href={resume}
            download
            variant="outlined"
            sx={{
              alignSelf: "start",
              borderColor: "#6366f1",
              color: "#f8fafc",
              borderRadius: 2,
              fontWeight: 600,
              px: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1e293b",
                borderColor: "#6366f1",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
