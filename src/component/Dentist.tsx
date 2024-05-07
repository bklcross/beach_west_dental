import {} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Dentist = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        width: "100%",
        boxShadow: "none",
        color: "#ffffff",
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        Meet The Dentist
      </Typography>
      <Typography variant="body1" color="text.primary">
        Dr. Kei Kim, DDS
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Dentist in Beach & West Dental
        <br />
        Graduated from the University of California San Francisco in 2010.
        <br />
        <br />
        Mission Statement: Support our patients in embracing top-quality dental
        care that enhances their lives and fosters trusting relationships.
      </Typography>
    </Box>
  );
};
