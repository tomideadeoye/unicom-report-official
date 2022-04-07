/* eslint react/prop-types: 0 */
import MaterialTable from "material-table";
import React from "react";
// import { marketing } from "./data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

export default function MaterialTab({ title, data }) {
  const columns = [
    {
      title: "Legislation",
      field: "Legislation Name ",
      cellStyle: { backgroundColor: "#039be5", color: "#FFF", marginTop: 90 },
      defaultGroupOrder: 0,
    },
    { title: "Act No", field: "Act No", width: 100 },
    { title: "Regulator", field: "Regulator", width: 100 },
    { title: "Compliance Name", field: "Compliance Name" },
    { title: "Penalty", field: "Penalty" },
    { title: "Section", field: "Section" },
    { title: "Task Frequency", field: "Task Frequency" },
    { title: "Significant Judicial Intervention", field: "Significant Judicial Intervention" },
    { title: "Criticality", field: "Criticality" },
    // { title: "YES", field: "YES" },
    // { title: "NDD", field: "NDD" },
    // { title: "NO", field: "NO" },
    { title: "Act URL", field: "Act URL" },
  ];

  return (
    <Container sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ ml: 4 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialTable
            style={{ color: "white" }}
            title={title}
            columns={columns}
            data={data}
            detailPanel={[
              {
                tooltip: "Open Law URL",
                render: (rowData) => (
                  <iframe
                    title={rowData["Act URL"]}
                    src={rowData["Act URL"]}
                    height="400px"
                    width="100%"
                  />
                ),
              },
            ]}
            options={{
              tableLayout: "fixed",
              filtering: true,
              columnsButton: true,
              paging: false,
              grouping: true,
              exportButton: true,
              header: true,
              headerStyle: {
                backgroundColor: "#039be5",
                fontSize: 13,
                color: "#FFF",
                width: "100%",

                // margin: 0,
              },
              rowStyle: {
                margin: 0,
                padding: 0,
                fontSize: 11,
                color: "black",
                align: "justify",
              },
            }}
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
