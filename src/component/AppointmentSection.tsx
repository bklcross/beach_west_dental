import { Box, Typography, TextField, Button } from "@mui/material";

export const AppointmentSection = () => {
  return (
    <Box sx={{ p: 2, bgcolor: "#f5f5f5", maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        MAKE AN APPOINTMENT
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        To request appointment availability, please fill out the form below. Our
        scheduling coordinator will contact you to confirm your appointment.
      </Typography>
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField label="Your Phone Number" variant="outlined" fullWidth />
          <TextField
            label="Date (MM/DD/YYYY)"
            variant="outlined"
            fullWidth
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Message (Optional)"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "start" }}
          >
            MAKE AN APPOINTMENT
          </Button>
        </Box>
      </form>
    </Box>
  );
};
