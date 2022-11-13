/* eslint-disable no-unused-vars */
import Icon from "@mui/material/Icon";
import Renderer from "pages/Renderer";
import Details from "pages/Details";
import Summary from "pages/Summary";
import MKTypography from "components/MKTypography";
import jee from "assets/images/jee.png";
import links, { bcmList, sctList } from "./data";

const routeLoc = {
  HOME: "/",
  ABOUT_US: "/company/about-us",
  CONTACT_US: "/company/contact-us",
};

const routes = [
  {
    name: "Project Unicom",
    icon: <Icon>dashboard</Icon>,
    component: <Renderer />,
    route: routeLoc.RENDER,
    collapse: [
      {
        name: "Executive Summary",
        route: "/executive-summary",
        component: <Summary />,
      },
      {
        name: "Complaince Audit Report",
        route: "/audit-report",
        component: <Details />,
      },
    ],
  },
  {
    name: "Business Compliance Manual (BCM)",
    icon: <Icon>view_day</Icon>,
    collapse: bcmList.map((item) => ({
      name: item[0].split("/")[item[0].split("/").length - 1],
      route: item[0],
      component: (
        <Renderer
          data={item[2]}
          excelLink={item[1]}
          type="BCM"
          title={item[0].split("/")[item[0].split("/").length - 1].toUpperCase().replace(/-/g, " ")}
        />
      ),
    })),
  },
  {
    name: "SCOUT Compliance Tool (SCT)",
    icon: <Icon>article</Icon>,
    collapse: sctList.map((item) => ({
      name: item[0].split("/")[item[0].split("/").length - 1],
      route: item[0],
      component: (
        <Renderer
          data={item[2]}
          excelLink={item[1]}
          type="BCM"
          title={item[0].split("/")[item[0].split("/").length - 1].toUpperCase().replace(/-/g, " ")}
        />
      ),
    })),
  },
  {
    name: "View Excel Files",
    icon: <Icon>download</Icon>,
    component: <Renderer />,
    route: routeLoc.RENDER,
    collapse: [
      {
        name: "BCM Excel File",
        href: links.bcm,
      },
      {
        name: "SCT Excel File",
        href: links.sct,
      },
    ],
  },
];

const footerRoutes = {
  brand: {
    name: "UNICOM Compliance Report",
    image: jee,
  },
  menus: [
    {
      name: "company",
      items: [
        { route: routeLoc.ABOUT_US, name: "Executive Summary" },
        { route: routeLoc.ABOUT_US, name: "About Us" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: routeLoc.HOME },
        { name: "knowledge center", route: routeLoc.HOME },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: routeLoc.HOME },
        { name: "privacy policy", route: routeLoc.HOME },
        { name: "licenses (EULA)", route: routeLoc.HOME },
      ],
    },
  ],

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {new Date().getFullYear()} JEE .
    </MKTypography>
  ),
};

export { routes, routeLoc, footerRoutes };
