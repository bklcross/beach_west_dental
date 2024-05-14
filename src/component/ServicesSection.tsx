import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import examCleaningServiceIcon from "../assets/svg/exam-cleaning.svg";
import teethWhitening from "../assets/svg/teeth-whitening.svg";
import toothColoredFilling from "../assets/svg/tooth-colored-filling.svg";
import implantRestoration from "../assets/svg/implant-restoration.svg";
import crownBridge from "../assets/svg/crown-bridge.svg";
import dentures from "../assets/svg/dentures.svg";
import invisalign from "../assets/svg/invisalign.svg";

const services: ServiceItem[] = [
  {
    title: "EXAM & CLEANING",
    image: examCleaningServiceIcon,
    description:
      "Regular dental exams and cleanings are vital for maintaining optimal oral health. Beyond daily brushing and flossing, these check-ups help detect and manage hidden issues like gum disease and decay, keeping your smile vibrant and healthy.",
  },
  {
    title: "TEETH WHITENING",
    image: teethWhitening,
    description:
      "Brighten your smile with our effective teeth whitening services. Using powerful agents like hydrogen peroxide or carbamide peroxide, this treatment breaks down stains, enhancing the natural whiteness of your teeth for a confident, radiant smile.",
  },
  {
    title: "TOOTH COLORED FILLING",
    image: toothColoredFilling,
    description:
      "Our tooth-colored fillings provide a functional and aesthetic restoration that blends seamlessly with your natural teeth. Composed of a durable composite, these fillings offer a discreet solution to cavities, matching the translucency and resistance of your own teeth.",
  },
  {
    title: "IMPLANT RESTORATION",
    image: implantRestoration,
    description:
      "Enhance your smile and confidence with our dental implant restoration services. Ideal for replacing missing teeth, our implants offer a permanent, natural-looking solution, restoring full functionality and aesthetics to your smile.",
  },
  {
    title: "CROWN & BRIDGE",
    image: crownBridge,
    description:
      "Our custom-designed crowns and bridges restore and protect your teeth. Crowns cover damaged teeth or implants, matching your natural teeth's color and function, while bridges fill gaps left by missing teeth, maintaining alignment and oral health.",
  },
  {
    title: "DENTURES",
    image: dentures,
    description:
      "Our dentures are designed to improve both the aesthetics and functionality of your smile. These removable replacements for missing teeth enhance your appearance, eating, and speaking abilities, providing a natural look and feel.",
  },
  {
    title: "INVISALIGN",
    image: invisalign,
    description:
      "Straighten your teeth discreetly with Invisalign. This innovative orthodontic treatment uses clear, custom-fitted aligners that are virtually invisible and removable, providing a comfortable and effective alternative to traditional braces.",
  },
];

export const ServicesSection = () => {
  return (
    <Box>
      <Typography
        gutterBottom
        variant="h1"
        component="div"
        sx={{
          fontFamily: "poppins",
          color: "#2E529C",
          fontWeight: 700,
          fontSize: "48px",
          margin: "40px 0",
          textAlign: "center",
          letterSpacing: "2px",
        }}
      >
        {"Services".toUpperCase()}
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ backgroundShadow: "none" }}
      >
        {services.map((service: ServiceItem) => (
          <Box
            key={service.title}
            sx={{ width: "300px", height: "100%", margin: "24px" }}
          >
            <Card
              sx={{
                backgroundShadow: "none",
                backgroundColor: "#2E529C",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                color: "#ffffff",
                flexDirection: "column",
                padding: "32px 16px",
                height: "320px",
                textAlign: "center",
              }}
            >
              <img src={service.image} alt={service.title} height={"64px"} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontFamily: "poppins",
                    fontWeight: 500,
                    fontSize: "24px",
                    textAlign: "center",
                    lineHeight: "unset",
                    letterSpacing: "1px",
                    m: "16px 0 ",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "oswald",
                    fontWeight: 200,
                    fontSize: "16px",
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
