import Icon from "@mui/material/Icon";
import Renderer from "pages/Renderer";
import Details from "pages/Details";
import Summary from "pages/Summary";
import {
  customerDevelopment,
  supplyChain,
  corpoateAffairs,
  itComplaince,
  marketing,
  legalRegulatory,
  humanResources,
  finance,
} from "pages/Renderer/sections/data";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import jee from "assets/images/jee.png";

const date = new Date().getFullYear();

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
    collapse: [
      {
        name: "Supply Chain",
        route: "/bcm/supply-chain",
        component: <Renderer data={supplyChain} title="Supply Chain" type="BCM" />,
      },
      {
        name: "Human Resources",
        route: "/bcm/human-resources",
        component: <Renderer data={humanResources} title="Human Resources" type="BCM" />,
      },
      {
        name: "Corporate Affairs",
        route: "/bcm/corpoate-affairs",
        component: <Renderer data={corpoateAffairs} title="Corporate Affairs" type="BCM" />,
      },
      {
        name: "Legal & Regulatory",
        route: "/bcm/legal-regulatory",
        component: <Renderer data={legalRegulatory} title="Legal & Regulatory" type="BCM" />,
      },
      {
        name: "Customer Development (Sales)",
        route: "/bcm/customer-development",
        component: (
          <Renderer data={customerDevelopment} title="Customer Development (Sales)" type="BCM" />
        ),
      },
      {
        name: "Marketing",
        route: "/bcm/marketing",
        component: <Renderer data={marketing} title="Marketing" type="BCM" />,
      },
      {
        name: "IT Compliance",
        route: "/bcm/it-compliance",
        component: <Renderer data={itComplaince} title="IT Compliance" type="BCM" />,
      },
      {
        name: "Finance",
        route: "/bcm/finance",
        component: <Renderer data={finance} title="Finance" type="BCM" />,
      },
    ],
  },
  {
    name: "SCOUT Compliance Tool (SCT)",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Supply Chain",
        route: "/sct/supply-chain",
        component: <Renderer data={supplyChain} title="Supply Chain" type="SCT" />,
      },
      {
        name: "Human Resources",
        route: "/sct/human-resources",
        component: <Renderer data={humanResources} title="Human Resources" type="SCT" />,
      },
      {
        name: "Corporate Affairs",
        route: "/sct/corpoate-affairs",
        component: <Renderer data={corpoateAffairs} title="Corporate Affairs" type="SCT" />,
      },
      {
        name: "Legal & Regulatory",
        route: "/sct/legal-regulatory",
        component: <Renderer data={legalRegulatory} title="Legal & Regulatory" type="SCT" />,
      },
      {
        name: "Customer Development (Sales)",
        route: "/sct/customer-development",
        component: (
          <Renderer data={customerDevelopment} title="Customer Development (Sales)" type="SCT" />
        ),
      },
      {
        name: "Marketing",
        route: "/sct/marketing",
        component: <Renderer data={marketing} title="Marketing" type="SCT" />,
      },
      {
        name: "IT Compliance",
        route: "/sct/it-compliance",
        component: <Renderer data={itComplaince} title="IT Compliance" type="SCT" />,
      },
      {
        name: "Finance",
        route: "/sct/finance",
        component: <Renderer data={finance} title="Finance" type="SCT" />,
      },
    ],
  },
];

const footerRoutes = {
  brand: {
    name: "UNICOM Compliance Report",
    image: jee,
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/tomideadeoye",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
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
      Copyright &copy; {date} JEE .
    </MKTypography>
  ),
};

export { routes, routeLoc, footerRoutes };
