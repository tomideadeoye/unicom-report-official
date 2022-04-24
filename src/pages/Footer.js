/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
// prop-types is a library for typechecking of props
import Container from "@mui/material/Container";
import typography from "assets/theme/base/typography";
import MKBox from "components/MKBox";

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
        marginTop={-4}
        sx={{ mb: 3 }}
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          marginTop={2}
        >
          A Unilever Nigeria Plc. company-wide compliance project.
        </MKBox>
        <MKBox
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          marginTop={2}
        >
          Prepared by:
          <Link to="https://jee.africa/">
            <img src={jee} alt="jee logo" width="130px" style={{ marginLeft: 10 }} />
          </Link>
        </MKBox>
      </MKBox>
    </Container>
  );
}

export { SimpleFooter };
