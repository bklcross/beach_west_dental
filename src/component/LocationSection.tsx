import { Box, Typography } from "@mui/material";

const MapComponent = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#ECF7FC", padding: "16px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "poppins",
          color: "#2E529C",
          fontWeight: 700,
          fontSize: "48px",
          padding: "24px 0 32px",
          letterSpacing: "2px",
        }}
      >
        OUR LOCATION
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1403915317765!2d-117.9915847236545!3d33.75703783325919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd271a3cacd6f3%3A0xa726a06d43873db1!2sBeach%20%26%20West%20Dental%20-%20Kei%20Kim%20D.D.S.!5e0!3m2!1sen!2sus!4v1715660218405!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapComponent;
