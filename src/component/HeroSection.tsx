import { Box, Typography, Button, Container } from "@mui/material";
import beach from "../assets/jpg/beach-hero.jpg"; // Replace with your image path
import PhoneIcon from "@mui/icons-material/Phone";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import google from "../assets/svg/google-logo.svg";
import yelp from "../assets/svg/yelp-logo.svg";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${beach})`,
        backgroundSize: "cover",
        backgroundPosition: "right 0% bottom 32%",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: "48px" }}>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="https://www.yelp.com/biz/beach-and-west-dental-westminster-3"
          sx={{
            color: "#1f5796",
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            margin: "0 8px",
            padding: "2px",
            minWidth: "unset",
          }}
        >
          <img src={yelp} alt="yelp-logo" style={{ width: 40 }} />
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="https://www.google.com/search?q=BEACH+%26+WEST+DENTAL&rlz=1C1CHBF_enUS981US981&oq=beach&aqs=chrome.0.69i59j69i57j46i199i465i512j69i60l2j69i61j69i60l2.2997j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80dd271a3cacd6f3:0xa726a06d43873db1,1,,,"
          sx={{
            color: "#1f5796",
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            margin: "0 8px",
            padding: "2px",
            minWidth: "unset",
          }}
        >
          <img src={google} alt="google-logo" style={{ width: 40 }} />
        </Button>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            margin: "32px",
            fontFamily: "poppins",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: {
              xs: "40px",
              sm: "60px",
            },
          }}
        >
          A Better Life Starts With A Beautiful Smile
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="tel:(714) 894-0574"
          startIcon={<PhoneIcon />}
          sx={{
            color: "#1f5796",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            margin: { xs: "16px", sm: "0 16px" },
            fontFamily: "Montserrat",
            fontWeight: "700",
          }}
        >
          (714) 894-0574
        </Button>
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
            margin: "0 16px",
            fontFamily: "Montserrat",
            fontWeight: "700",
          }}
        >
          Make an Appointment
        </Button>
      </Container>
    </Box>
  );
};
