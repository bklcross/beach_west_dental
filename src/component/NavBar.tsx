import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/svg/logo-blue.svg";
import { NavItem } from "../shared/interfaces";

interface NavBarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems: NavItem[] = [
  { label: "Dentist", href: "#dentist-section" },
  { label: "Services", href: "#services-section" },
  { label: "New Patient", href: "#new-patient-section" },
  { label: "Contact", href: "#footer" },
];

export const NavBar = ({ window }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="inherit"
        sx={{
          boxShadow: "none",
          maxWidth: "2400px",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              padding: "24px 48px",
              justifyContent: { xs: "center", sm: "space-between" },
            }}
          >
            <Box
              sx={{
                width: { xs: "250px", sm: "300px", lg: "400px" },
              }}
            >
              <img src={logo} alt="bw-logo" style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              {navItems.map((item: NavItem) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: "#787878",
                    fontSize: "16px",
                    fontFamily: "oswald",
                    fontWeight: "400",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ margin: "16px" }}>
              <img src={logo} alt="bw-logo" style={{ width: 200 }} />
            </Box>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {navItems.map((item: NavItem) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: "#787878",
                    fontSize: "16px",
                    fontFamily: "oswald",
                    fontWeight: "400",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};
