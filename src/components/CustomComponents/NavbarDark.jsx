import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { routes } from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route:
        //     "https://docs.google.com/spreadsheets/d/e/2PACX-1vQkpeRaUbnrSBn1XMfI5shOInZRTeRU_6SHjTrL08FeKUiMWo2NgLZlqAxN9ggooQ/pubhtml",
        //   color: "info",
        //   label: "View Excel",
        // }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
