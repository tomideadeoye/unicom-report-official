/* eslint react/prop-types: 0 */
import MaterialTable from "material-table";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import useCheckMobileScreen from "./useCheckMobileScreen";

export default function MaterialTab({ title, data }) {
  const columns = [
    {
      title: "Legislation",
      field: "Legislation Name ",

      cellStyle: { backgroundColor: "#039be5", color: "#FFF" },
      defaultGroupOrder: 0,
    },
    {
      title: "Act No",
      field: "Act No",
    },
    {
      title: "Regulator",
      field: "Regulator",
    },
    {
      title: "Compliance Name",
      field: "Compliance Name",
    },
    {
      title: "Penalty",
      field: "Penalty",
    },
    {
      title: "Section",
      field: "Section",
    },
    {
      title: "Task Frequency",
      field: "Task Frequency",
    },
    {
      title: "Significant Judicial Intervention",
      field: "Significant Judicial Intervention",
    },
    {
      title: "Criticality",
      field: "Criticality",
    },
    // { title: "YES", field: "YES" ,
    // cellStyle: {
    //   cellWidth: "11%",
    // },},
    // { title: "NDD", field: "NDD" ,
    // cellStyle: {
    //   cellWidth: "11%",
    // },},
    // { title: "NO", field: "NO" ,
    // cellStyle: {
    // cellWidth: "11%",
    // },},
    {
      title: "Act URL",
      field: "Act URL",
    },
  ];
  const options = {
    tableLayout: useCheckMobileScreen(),
    detailPanelColumnAlignment: "left",
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
    },
    rowStyle: {
      margin: 0,
      padding: 0,
      fontSize: 11,
      color: "black",
      align: "justify",
    },
  };

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
                    style={{ border: "3px solid blue" }}
                    title={rowData["Act URL"]}
                    src={rowData["Act URL"]}
                    height="400px"
                    width="100%"
                  />
                ),
              },
            ]}
            options={options}
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
