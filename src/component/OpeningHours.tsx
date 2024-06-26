import { Box, Button, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const OpeningHours = () => {
  return (
    <Box
      sx={{
        maxWidth: { md: "280px" },
        width: { md: "100%" },
        boxShadow: "none",
        backgroundColor: "#2E529C",
        color: "#ffffff",
        padding: { xs: "32px", md: "48px" },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "montserrat",
          fontWeight: "600",
          fontSize: "28px",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        OPENING HOURS
      </Typography>
      <Box sx={{ color: "#ffffff", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <Box>MONDAY</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <Box>TUESDAY</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <Box>Wednesday</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <Box>THURSDAY</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
            color: "#F0441D",
          }}
        >
          <Box>FRIDAY</Box> <Box>CLOSED</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <Box>SATURDAY</Box> <Box>BY APPOINTMENT</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "32px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
            color: "#F0441D",
          }}
        >
          <Box>SUNDAY</Box> <Box>CLOSED</Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="inherit"
        size="large"
        startIcon={<EventAvailableIcon />}
        href={"#appointment-form"}
        sx={{
          color: "#1f5796",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          fontFamily: "Montserrat",
          fontWeight: "700",
          marginTop: "8px",
        }}
      >
        Make an Appointment
      </Button>
    </Box>
  );
};
