import { Box, Typography, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export const NewPatientSection = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#e3f2fd", p: 2 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        NEW PATIENT FORMS
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={2}>
        PLEASE FILL THE FORM(S), FOR NEW PATIENTS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <Button
          variant="text"
          startIcon={<DescriptionIcon />}
          href="/path/to/consent-for-treatment-form.pdf"
        >
          Consent for Treatment
        </Button>
        <Button
          variant="text"
          startIcon={<DescriptionIcon />}
          href="/path/to/new-patient-medical-history-form.pdf"
        >
          New Patient Medical History
        </Button>
        <Button
          variant="text"
          startIcon={<DescriptionIcon />}
          href="/path/to/new-patient-registration-form.pdf"
        >
          New Patient Registration
        </Button>
      </Box>
    </Box>
  );
};
