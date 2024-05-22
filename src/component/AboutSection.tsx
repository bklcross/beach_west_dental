import { Box, Typography } from "@mui/material";
import peeps from "../assets/png/smiling-people.png";
import thumbIcon from "../assets/svg/thumpsUp.svg";
import insuranceIcon from "../assets/svg/insurance.svg";

export const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#ECF7FC",
        padding: { xs: "32px", md: "40px" },
        alignItems: { xs: "center" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            backgroundImage: `url(${peeps})`,
            backgroundRepeat: "no-repeat",
            zIndex: 2,
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "100%",
            height: { xs: "400px", md: "550px" },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          flexDirection: "column",
          margin: "48px 0 0 0",
        }}
      >
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "poppins",
              color: "#2E529C",
              fontWeight: 700,
              fontSize: "40px",
              margin: "8px 0",
              letterSpacing: "2px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            WHY CHOOSE
          </Typography>
          <Box
            sx={{
              backgroundColor: "#2E529C",
              width: "300px",
              height: "25px",
              margin: "0 0 0 32px",
              display: { xs: "none", md: "flex" },
            }}
          ></Box>
        </Box>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: "poppins",
            color: "#2E529C",
            fontWeight: 700,
            fontSize: "40px",
            letterSpacing: "2px",
            margin: { xs: "0 0 16px 0", md: "48px 0 16px 0" },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          BEACH & WEST?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            margin: "8px 0",
            color: "#231F20",
            fontFamily: "oswald",
            fontWeight: 300,
          }}
        >
          Our team is pleased to welcome you to our practice. We want all our
          patients to be informed decision makers and fully understand any
          health issues you face.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            margin: "8px 0",
            color: "#231F20",
            fontFamily: "oswald",
            fontWeight: 300,
          }}
        >
          Our team at Beach & West Dental provides exceptional and transparent
          dental care. We always welcome new patients and accept all PPO
          insurance plans, ensuring easy access to top-tier dental services.
          Trust us for informed and reliable treatment options tailored to your
          needs.
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", margin: "16px 0" }}
          >
            <Box
              component="img"
              src={thumbIcon}
              sx={{ width: 50, mr: "16px" }}
            />
            <Box>
              <Box sx={{ fontWeight: 700, fontFamily: "Oswald" }}>
                Accept all New Patients
              </Box>
              <Box sx={{ color: "#707274", fontFamily: "Oswald" }}>
                We welcome new patients at all times
              </Box>
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", margin: "16px 0" }}
          >
            <Box
              component="img"
              src={insuranceIcon}
              sx={{ width: 50, mr: "16px" }}
            />
            <Box>
              <Box sx={{ fontWeight: 700, fontFamily: "Oswald" }}>
                {" "}
                Accept all PPO Insurance
              </Box>
              <Box sx={{ color: "#707274", fontFamily: "Oswald" }}>
                All types of PPO insurance are accepted
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
