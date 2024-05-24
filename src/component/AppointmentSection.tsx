import { Box, Typography, TextField, Button } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import axios from "axios";
import { Appointment } from "../shared/interfaces";
import { AppointmentState } from "../shared/enums";
import ReCAPTCHA from "react-google-recaptcha";

export const AppointmentSection: React.FC = () => {
  const [formState, setFormState] = useState<AppointmentState>(
    AppointmentState.Default
  );
  const [appointment, setAppointment] = useState<Appointment>({
    email: "",
    name: "",
    tel: "",
    message: "",
    date: new Date().toLocaleDateString(),
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const onChange = (token: string | null) => {
    setCaptchaValue(token);
  };

  const [errors, setErrors] = useState({
    email: "",
    tel: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  // Handle date changes
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setAppointment({
        ...appointment,
        date: date.toLocaleDateString(),
      });
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    let isValid = true;
    let newErrors = { email: "", tel: "" };

    if (!validateEmail(appointment.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!validatePhoneNumber(appointment.tel)) {
      newErrors.tel = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      if (!captchaValue) {
        return;
      }

      try {
        const resRecaptcha = await axios.post(
          "https://bwd-email-server.herokuapp.com/verify-recaptcha",
          {
            token: captchaValue,
          }
        );

        if (resRecaptcha.data.message !== "reCAPTCHA verified successfully") {
          return;
        }

        const resApt = await axios.post(
          "https://bwd-email-server.herokuapp.com/",
          appointment
        );

        const data = resApt.data;

        if (data.status === "success") {
          setFormState(AppointmentState.Success);
        }
      } catch (error) {
        console.error("There was an error submitting the form: ", error);
      }
    }
  };

  if (formState === AppointmentState.Success) {
    return (
      <Box
        sx={{
          padding: { xs: "40px 32px", md: "40px 120px" },
          textAlign: "center",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#2E529C",
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "40px",
            textTransform: "uppercase",
            maxWidth: "560px",
          }}
        >
          Your appointment request was successfully submitted.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            margin: "16px 0",
            color: "#231F20",
            fontFamily: "oswald",
            fontWeight: 300,
          }}
        >
          We will be contacting you soon to confirm your appointment.
        </Typography>
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          padding: { xs: "40px 32px", md: "40px 120px" },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
        }}
        id={"appointment-form"}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            margin: { lg: "32px" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#2E529C",
              fontFamily: "poppins",
              fontWeight: "700",
              fontSize: "48px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            MAKE AN APPOINTMENT
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              margin: "16px 0",
              color: "#231F20",
              fontFamily: "oswald",
              fontWeight: 300,
            }}
          >
            To request appointment availability, please fill out the form below.
            Our scheduling coordinator will contact you to confirm your
            appointment.
          </Typography>
          <Box
            sx={{
              color: "#ffffff",
              backgroundColor: "#2E529C",
              fontFamily: "Montserrat",
              fontWeight: "700",
              borderRadius: "16px",
              "&:hover": {
                backgroundColor: "#2E529C",
                boxShadow: "none",
              },
              padding: "16px",
              textTransform: "uppercase",
            }}
          >
            Send Appointment Request Today
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            gap: "8px",
          }}
        >
          <TextField
            label="Your Name"
            variant="standard"
            fullWidth
            name="name"
            value={appointment.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Your Email"
            variant="standard"
            fullWidth
            name="email"
            value={appointment.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            type="tel"
            label="Your Phone Number"
            variant="standard"
            fullWidth
            name="tel"
            value={appointment.tel}
            onChange={handleInputChange}
            error={!!errors.tel}
            helperText={errors.tel}
          />
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Message (Optional)"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              name="message"
              value={appointment.message}
              onChange={handleInputChange}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
          >
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              orientation="landscape"
              openTo="day"
              value={new Date(appointment.date)}
              onChange={handleDateChange}
            />
            <Button
              variant="contained"
              color="inherit"
              size="large"
              startIcon={<EventAvailableIcon />}
              sx={{
                color: "#ffffff",
                backgroundColor: "#2E529C",
                borderRadius: "16px",
                fontFamily: "Montserrat",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "#2E529C",
                  boxShadow: "none",
                },
                height: "42.25px",
                margin: "32px",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
