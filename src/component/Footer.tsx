import { Box, Button, Typography } from "@mui/material";
import placeIcon from "../assets/svg/address.svg";
import emailIcon from "../assets/svg/email.svg";
import phoneIcon from "../assets/svg/phone.svg";
import logo from "../assets/svg/logo-white.svg";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#2E529C",
        color: "white",
        padding: "48px",
        flexDirection: { xs: "column", md: "row" },
      }}
      id="footer"
    >
      <Box
        sx={{
          width: { xs: "250px", sm: "300px", lg: "400px" },
          margin: { xs: "16px", md: "0" },
        }}
      >
        <img src={logo} alt="bw-logo" style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="https://www.google.com/maps/place/Beach+%26+West+Dental+-+Kei+Kim+D.D.S./@33.7570378,-117.9915847,17z/data=!3m2!4b1!5s0x80dd2626b1556d31:0xabebc0836fc02b9a!4m6!3m5!1s0x80dd271a3cacd6f3:0xa726a06d43873db1!8m2!3d33.7570334!4d-117.9890098!16s%2Fg%2F11hdx1bfsb?entry=ttu"
          sx={{
            padding: "0",
            background: "transparent",
            boxShadow: "none",
            fontFamily: "oswald",
            marginBottom: "8px",
          }}
        >
          <img src={placeIcon} alt="location" width={"20px"} />
          <Typography variant="body2" ml="16px" fontSize={"12px"}>
            14120 Beach Blvd #112, Westminster, CA 92683
          </Typography>
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="mailto:beach.west.dental@gmail.com?subject=Feedback&body=Please let us know your feedback."
          sx={{
            padding: "0",
            background: "transparent",
            boxShadow: "none",
            fontFamily: "oswald",
            marginBottom: "8px",
          }}
        >
          <img src={emailIcon} alt="email" width={"20px"} />
          <Typography variant="body2" ml="16px" fontSize={"12px"}>
            beach.west.dental@gmail.com
          </Typography>
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="tel:(714) 894-0574"
          sx={{
            padding: "0",
            background: "transparent",
            boxShadow: "none",
            fontFamily: "oswald",
            marginBottom: "8px",
          }}
        >
          <img src={phoneIcon} alt="phone" width={"20px"} />
          <Typography variant="body2" ml="16px" fontSize={"12px"}>
            1 (714) 894-0574
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
