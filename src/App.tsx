import { Box } from "@mui/material";
import { NavBar } from "./component/NavBar";
import { HeroSection } from "./component/HeroSection";
import { IntroductionSection } from "./component/IntroductionSection";
import { AboutSection } from "./component/AboutSection";
import { ServicesSection } from "./component/ServicesSection";
import { NewPatientSection } from "./component/NewPatientSection";
import { AppointmentSection } from "./component/AppointmentSection";
import LocationSection from "./component/LocationSection";
import { Footer } from "./component/Footer";

export const App = () => {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <NewPatientSection />
      <AppointmentSection />
      <LocationSection />
      <Footer />
    </Box>
  );
};
