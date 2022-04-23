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
        component: (
          <Renderer
            data={supplyChain}
            title="Supply Chain"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=1003924324&single=true"
          />
        ),
      },
      {
        name: "Human Resources",
        route: "/bcm/human-resources",
        component: (
          <Renderer
            data={humanResources}
            title="Human Resources"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=487732059&single=true"
          />
        ),
      },
      {
        name: "Corporate Affairs",
        route: "/bcm/corpoate-affairs",
        component: (
          <Renderer
            data={corpoateAffairs}
            title="Corporate Affairs"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=170787123&single=true"
          />
        ),
      },
      {
        name: "Legal & Regulatory",
        route: "/bcm/legal-regulatory",
        component: (
          <Renderer
            data={legalRegulatory}
            title="Legal & Regulatory"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=182763&single=true"
          />
        ),
      },
      {
        name: "Customer Development (Sales)",
        route: "/bcm/customer-development",
        component: (
          <Renderer
            data={customerDevelopment}
            title="Customer Development (Sales)"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=1873311419&single=true"
          />
        ),
      },
      {
        name: "Marketing",
        route: "/bcm/marketing",
        component: (
          <Renderer
            data={marketing}
            title="Marketing"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=1621523008&single=true"
          />
        ),
      },
      {
        name: "IT Compliance",
        route: "/bcm/it-compliance",
        component: (
          <Renderer
            data={itComplaince}
            title="IT Compliance"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=1770416712&single=true"
          />
        ),
      },
      {
        name: "Finance",
        route: "/bcm/finance",
        component: (
          <Renderer
            data={finance}
            title="Finance"
            type="BCM"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml?gid=357992887&single=true"
          />
        ),
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
        component: (
          <Renderer
            data={supplyChain}
            title="Supply Chain"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=1396641797&single=true"
          />
        ),
      },
      {
        name: "Human Resources",
        route: "/sct/human-resources",
        component: (
          <Renderer
            data={humanResources}
            title="Human Resources"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=1825056836&single=true"
          />
        ),
      },
      {
        name: "Corporate Affairs",
        route: "/sct/corpoate-affairs",
        component: (
          <Renderer
            data={corpoateAffairs}
            title="Corporate Affairs"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=1973662066&single=true"
          />
        ),
      },
      {
        name: "Legal & Regulatory",
        route: "/sct/legal-regulatory",
        component: (
          <Renderer
            data={legalRegulatory}
            title="Legal & Regulatory"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=687415910&single=true"
          />
        ),
      },
      {
        name: "Customer Development (Sales)",
        route: "/sct/customer-development",
        component: (
          <Renderer
            data={customerDevelopment}
            title="Customer Development (Sales)"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=98604592&single=true"
          />
        ),
      },
      {
        name: "Marketing",
        route: "/sct/marketing",
        component: (
          <Renderer
            data={marketing}
            title="Marketing"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=1906657850&single=true"
          />
        ),
      },
      {
        name: "IT Compliance",
        route: "/sct/it-compliance",
        component: (
          <Renderer
            data={itComplaince}
            title="IT Compliance"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=1637167046&single=true"
          />
        ),
      },
      {
        name: "Finance",
        route: "/sct/finance",
        component: (
          <Renderer
            data={finance}
            title="Finance"
            type="SCT"
            excelLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml?gid=116420759&single=true"
          />
        ),
      },
    ],
  },
  {
    name: "View Excel Files",
    icon: <Icon>download</Icon>,
    component: <Renderer />,
    route: routeLoc.RENDER,
    collapse: [
      {
        name: "BCM Excel File",
        href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSaj8-rKnBRgs82aogTNF6yODQucuw_0owEAL09g_7pDQ79urN4d1jDvfRQixUsaQ/pubhtml",
      },
      {
        name: "SCT Excel File",
        href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnbdPXzNW_1-xn8WExrTofAmNonepHtR2YuIQKSrlSTJJh1aS-I6rIbW8cdu4Oig/pubhtml",
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
