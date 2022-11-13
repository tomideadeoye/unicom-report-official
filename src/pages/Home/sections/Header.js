import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/bg-presentation1.jpg";

// eslint-disable-next-line react/prop-types
function HeaderOne({ bcmLink, sctLink }) {
  return (
    <MKBox component="header" const position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              PROJECT UNICOM
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              A Unilever Nigeria Plc. company-wide compliance project.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <a href={bcmLink} target="_blank" rel="noopener noreferrer">
                <MKButton color="white">View BCM</MKButton>
              </a>
              <a href={sctLink} target="_blank" rel="noopener noreferrer">
                <MKButton variant="text" color="white">
                  View SCT
                </MKButton>
              </a>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;
