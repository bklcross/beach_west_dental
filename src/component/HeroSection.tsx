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
      <Container maxWidth="md">
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="tel:(714) 894-0574"
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
          href="tel:(714) 894-0574"
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
          sx={{ margin: "32px", fontFamily: "futura" }}
        >
          {"A Better Life Starts With A Beautiful Smile".toUpperCase()}
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
            margin: "0 16px",
          }}
        >
          (714) 894-0574
        </Button>
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
            margin: "0 16px",
          }}
        >
          {"Make and Appointment".toLowerCase()}
        </Button>
      </Container>
    </Box>
  );
};
