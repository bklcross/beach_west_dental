import { Box, Button, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const OpeningHours = () => {
  return (
    <Box
      sx={{
        maxWidth: "280px",
        width: "100%",
        boxShadow: "none",
        backgroundColor: "#2E529C",
        color: "#ffffff",
        padding: "48px",
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
        }}
      >
        OPENING HOURS
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ color: "#ffffff" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "24px 0",
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
            margin: "24px 0",
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
            margin: "24px 0",
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
            margin: "24px 0",
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
            margin: "24px 0",
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
            margin: "24px 0",
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
            margin: "24px 0",
            fontFamily: "oswald",
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1px",
            color: "#F0441D",
          }}
        >
          <Box>SUNDAY</Box> <Box>CLOSED</Box>
        </Box>
      </Typography>
      <Button
        variant="contained"
        color="inherit"
        size="large"
        href="tel:(714) 894-0574"
        startIcon={<EventAvailableIcon />}
        sx={{
          color: "#1f5796",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          fontFamily: "Montserrat",
          fontWeight: "700",
          marginTop: "8px",
        }}
      >
        {"Make an Appointment".toLowerCase()}
      </Button>
    </Box>
  );
};
