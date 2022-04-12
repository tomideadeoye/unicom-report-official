/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import { DefaultFooter } from "pages/Footer";
import { routeLoc, footerRoutes } from "routes";
import NavbarDark from "components/CustomComponents/NavbarDark";
import MaterialTab from "./sections/material-tab";

function Home({ type, title, data }) {
  const excelDetails = () => (
    <>
      {/* EXCEL TITLE */}
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Excel Files"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Access Raw Files Below
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ m: 1 }}>
        <Container sx={{ mt: 6, bgcolor: "background.paper", boxShadow: 0.3, borderRadius: 2 }}>
          <iframe
            title="Raw Files"
            width="100%"
            height="700"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkpeRaUbnrSBn1XMfI5shOInZRTeRU_6SHjTrL08FeKUiMWo2NgLZlqAxN9ggooQ/pubhtml?widget=true&amp;headers=false"
          />
        </Container>
      </Container>
      {/* DOWNLAOD BUTTON */}
      <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
        <MKButton
          href="https://docs.google.com/spreadsheets/d/1X_oPC8_oaiQ-eLgWvGir8QkMvWZukYLS/edit?usp=sharing&ouid=109599550030499733240&rtpof=true&sd=true"
          variant="gradient"
          color="info"
          target="_blank"
        >
          Download
        </MKButton>
      </Grid>
    </>
  );

  return (
    <>
      <NavbarDark />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 3,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <BaseLayout breadcrumb={[{ label: "Home", route: routeLoc.HOME }, { label: type }]}>
          <View title={title} mapDetails={excelDetails()}>
            <MaterialTab data={data} title={title} type={type} />
          </View>
        </BaseLayout>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
