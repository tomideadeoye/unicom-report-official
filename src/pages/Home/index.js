import MKBox from "components/MKBox";
import { SimpleFooter } from "pages/Footer";
import { footerRoutes } from "routes";
import NavbarDark from "components/CustomComponents/NavbarDark";
import HeaderOne from "./sections/Header";
import links from "../../data";

function Home() {
  return (
    <>
      <NavbarDark />
      <HeaderOne bcmLink={links.bcm} sctLink={links.sct} />
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
