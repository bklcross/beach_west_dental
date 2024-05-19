import {} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import dentist from "../assets/png/dr-kei.png";

export const Dentist = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        width: { md: "100%" },
        boxShadow: "none",
        padding: { xs: "0 32px 40px 40px", md: "0 48px 40px 40px" },
      }}
      id="dentist-section"
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontFamily: "poppins",
          color: "#2E529C",
          fontWeight: 700,
          fontSize: "40px",
          margin: "40px 0",
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Meet The Dentist
      </Typography>
      <Box
        sx={{
          display: "flex",
          fontFamily: "oswald",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box mr={"40px"} sx={{ display: "flex", justifyContent: "center" }}>
          <img src={dentist} alt="kei kim dentist" width="275px" />
        </Box>
        <Box>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              color: "#2E529C",
              fontWeight: 600,
              fontSize: "28px",
              fontFamily: "poppins",
              margin: { xs: "16px 0 ", lg: "0" },
            }}
          >
            Dr. Kei Kim, DDS
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              color: "#707274",
              borderBottom: "1px solid #2E529C",
              fontFamily: "oswald",
              paddingBottom: "8px",
              width: "fit-content",
            }}
          >
            Beach & West Dental Dentist
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              margin: "8px 0",
              color: "#231F20",
              fontFamily: "oswald",
              fontWeight: 300,
            }}
          >
            Meet Dr. Kei Kim, DDS, at Beach & West Dental. Since earning her DDS
            from the University of California San Francisco in 2010, Dr. Kei Kim
            has been committed to delivering exceptional dental care
            specifically designed for families. She focuses on providing
            high-quality treatments that enhance both health and happiness,
            building trust and long-lasting relationships with every patient.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              margin: "8px 0",
              color: "#231F20",
              fontFamily: "oswald",
              fontWeight: 300,
            }}
          >
            A respected member of the American Dental Association, California
            Dental Association, Orange County Dental Society, and Pacific Coast
            Odontic Seminar, Dr. Kim is dedicated to serving the Westminster
            community with comprehensive family dental services. She takes great
            pride in offering personalized care to meet the unique needs of each
            family.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              margin: "8px 0",
              color: "#231F20",
              fontFamily: "oswald",
              fontWeight: 300,
            }}
          >
            Living in Huntington Beach, Dr. Kim values her time with her family,
            friends, and her beloved dog. At Beach & West Dental, she looks
            forward to helping your family achieve and maintain vibrant, healthy
            smiles for years to come.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
