import { Box } from "@mui/material";
import { Dentist } from "./Dentist";
import { OpeningHours } from "./OpeningHours";

export const IntroductionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <OpeningHours />
      <Dentist />
    </Box>
  );
};
