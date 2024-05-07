import { Box, Typography } from "@mui/material";

export const OpeningHours = () => {
  return (
    <Box
      sx={{
        maxWidth: "350px",
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
        sx={{ display: "flex", justifyContent: "center" }}
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
            margin: "16px 0",
          }}
        >
          <Box>Monday</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Tuesday</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Wednesday</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Thursday</Box> <Box>9AM-6PM</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Friday</Box> <Box>CLOSED</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Saturday</Box> <Box>BY APPOINTMENT</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <Box>Sunday</Box> <Box>CLOSED</Box>
        </Box>
      </Typography>
    </Box>
  );
};
