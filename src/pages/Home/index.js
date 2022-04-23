import MKBox from "components/MKBox";

import { SimpleFooter } from "pages/Footer";
import { footerRoutes } from "routes";
import NavbarDark from "components/CustomComponents/NavbarDark";
import HeaderOne from "./sections/Header";

const bcmLink =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml";
const sctLink =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml";

function Home() {
  return (
    <>
      <NavbarDark />
      <HeaderOne bcmLink={bcmLink} sctLink={sctLink} />

      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
