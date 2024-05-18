import { Box, Typography, Button } from "@mui/material";
import consentIcon from "../assets/svg/consent.svg";
import medicalHistoryIcon from "../assets/svg/medical-history.svg";
import patientRegistrationIcon from "../assets/svg/patient-registration.svg";
import consentPDF from "../assets/pdf/Consent_For_Treatment.pdf";
import medicalHistoryPDF from "../assets/pdf/Medical_And_Dental_History_Forms.pdf";
import patientRegistrationPDF from "../assets/pdf/Patient_Registration_Form.pdf";

export const NewPatientSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#e3f2fd",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="new-patient-section"
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "poppins",
          color: "#2E529C",
          fontWeight: 700,
          fontSize: "48px",
          padding: "0 0 32px 0",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        New Patient Forms
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{ fontWeight: 700, margin: "0 0 24px 0" }}
      >
        PLEASE FILL OUT THE FORM(S), FOR NEW PATIENTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
        }}
      >
        <Button
          variant="text"
          href={consentPDF}
          download={"Consent_For_Treatment.pdf"}
          sx={{ textTransform: "unset" }}
        >
          <img src={consentIcon} alt="consent-icon" width={"75px"} />
          <Box
            sx={{
              margin: "0 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#393939", fontWeight: 700, fontFamily: "Oswald" }}
            >
              Consent for Treatment
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#707274", fontFamily: "Oswald" }}
            >
              Click here to download the form
            </Typography>
          </Box>
        </Button>
        <Button
          variant="text"
          href={medicalHistoryPDF}
          download={"Medical_And_Dental_History_Forms.pdf"}
          sx={{ textTransform: "unset" }}
        >
          <img
            src={medicalHistoryIcon}
            alt="paitent-registration-icon"
            width={"75px"}
          />
          <Box
            sx={{
              margin: "0 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#393939", fontWeight: 700, fontFamily: "Oswald" }}
            >
              New Patient Medical History
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#707274", fontFamily: "Oswald" }}
            >
              Click here to download the form
            </Typography>
          </Box>
        </Button>
        <Button
          variant="text"
          href={patientRegistrationPDF}
          download={"Patient_Registration_Form.pdf"}
          sx={{ textTransform: "unset" }}
        >
          <img
            src={patientRegistrationIcon}
            alt="paitent-registration-icon"
            width={"75px"}
          />
          <Box
            sx={{
              margin: "0 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#393939",
                fontWeight: 700,
                fontFamily: "Oswald",
              }}
            >
              New Patient Registration
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#707274", fontFamily: "Oswald" }}
            >
              Click here to download the form
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
