import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import { SimpleFooter } from "pages/Footer";
import { footerRoutes } from "routes";
import NavbarDark from "components/CustomComponents/NavbarDark";

const link1 = "https://drive.google.com/file/d/1_efeAwDQ1QXvclrxxepoYLDOl5sGImSC/preview";
const downlaodLink1 =
  "https://drive.google.com/uc?export=download&id=1_efeAwDQ1QXvclrxxepoYLDOl5sGImSC";

function Home() {
  return (
    <>
      <NavbarDark />

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 1,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* EMBED */}
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
              badgeContent="Executive Summary"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" fontWeight="bold">
              Access The Executive Summary Here
            </MKTypography>
          </Grid>
        </Container>

        <Container>
          <BaseLayout breadcrumb={[{ label: "Home", route: "/" }, { label: "Executive Summary" }]}>
            <View
              tit1="Summary"
              tit2="Download"
              tit1link={link1}
              tit2link={link1}
              title="Raw Files"
              mapDetails={
                <Grid container item justifyContent="center" xs={12} mb={2}>
                  <MKButton
                    variant="gradient"
                    color="info"
                    rel="noopener noreferrer"
                    sx={{ mr: 2 }}
                    href={downlaodLink1}
                  >
                    Download Executive Summary
                  </MKButton>
                </Grid>
              }
            >
              <iframe
                title="Executive Summary"
                width="100%"
                height="700"
                src={link1}
                allow="autoplay"
              />
            </View>
          </BaseLayout>
        </Container>

        {/* DOWNLAOD BUTTON */}
        <Grid container item justifyContent="center" xs={12} mb={2}>
          <MKButton
            variant="gradient"
            color="info"
            rel="noopener noreferrer"
            sx={{ mr: 2 }}
            href={downlaodLink1}
          >
            Download Executive Summary
          </MKButton>
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
