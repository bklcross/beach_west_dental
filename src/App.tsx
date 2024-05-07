import { Box } from "@mui/material";
import { NavBar } from "./component/NavBar";
import { HeroSection } from "./component/HeroSection";
import { IntroductionSection } from "./component/IntroductionSection";

export const App = () => {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <IntroductionSection />
    </Box>
  );
};
