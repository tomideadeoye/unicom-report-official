/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
// prop-types is a library for typechecking of props
import Container from "@mui/material/Container";
import typography from "assets/theme/base/typography";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

/* eslint-disable react/prop-types */
// prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

import jee from "assets/images/jee.png";
import { Link } from "react-router-dom";

function SimpleFooter({ light }) {
  const { size } = typography;

  return (
    <Container>
      <MKBox
        sx={{ mb: 3 }}
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; 2022, Project UNICOM (A Unilever Nigeria Plc. company-wide compliance project.)
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          <MKTypography
            sx={{ mr: 2 }}
            variant="button"
            fontWeight="regular"
            color={light ? "white" : "text"}
          >
            Prepared By:
          </MKTypography>
          <Link to="https://jee.africa/">
            <img src={jee} alt="jee logo" width="33%" />
          </Link>
        </MKBox>
      </MKBox>
    </Container>
  );
}

export { SimpleFooter };
