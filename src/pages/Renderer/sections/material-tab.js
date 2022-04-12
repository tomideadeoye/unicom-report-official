/* eslint react/prop-types: 0 */
import MaterialTable from "material-table";
import SimpleModal from "./modal";

export default function MaterialTab({ data, type }) {
  const columnsBCM = [
    {
      title: "Act No",
      field: "Act No",
    },
    {
      title: "Legislation",
      field: "Legislation Name ",

      cellStyle: { backgroundColor: "#039be5", color: "#FFF" },
      defaultGroupOrder: 0,
    },
    {
      title: "Act URL",
      field: "Act URL",
    },

    {
      title: "Regulator",
      field: "Regulator",
    },
    {
      title: "Section",
      field: "Section",
    },
    {
      title: "Compliance Description",
      field: "Compliance Description",
    },
    {
      title: "Task Frequency",
      field: "Task Frequency",
    },
    {
      title: "Penalty",
      field: "Penalty",
    },
    {
      title: "Significant Judicial Intervention",
      field: "Significant Judicial Intervention",
    },
    {
      title: "YES",
      field: "YES",
    },
    {
      title: "NDD",
      field: "NDD",
    },
    {
      title: "NO",
      field: "NO",
    },
  ];

  const columnsSCT = [
    {
      title: "Act No",
      field: "Act No",
    },
    {
      title: "Legislation",
      field: "Legislation Name ",

      cellStyle: { backgroundColor: "#039be5", color: "#FFF" },
      defaultGroupOrder: 0,
    },
    {
      title: "Act URL",
      field: "Act URL",
    },

    {
      title: "Regulator",
      field: "Regulator",
    },
    {
      title: "Section",
      field: "Section",
    },
    {
      title: "Compliance Name",
      field: "Compliance Name",
    },
    {
      title: "Compliance Description",
      field: "Compliance Description",
    },
    {
      title: "Task Frequency",
      field: "Task Frequency",
    },
    {
      title: "Penalty",
      field: "Penalty",
    },
    {
      title: "Criticality",
      field: "Criticality",
    },

    {
      title: "Significant Judicial Intervention",
      field: "Significant Judicial Intervention",
    },
  ];

  function checkType() {
    return type === "BCM" ? columnsBCM : columnsSCT;
  }

  const options = {
    filtering: true,
    columnsButton: true,
    paging: false,
    grouping: true,
    header: true,
    headerStyle: {
      backgroundColor: "#039be5",
      fontSize: 13,
      color: "#FFF",
      // position: "absolute",
      // top: 0,
      // left: 0,
      // height: "100%",
      // width: "100%",
      // justifyContent: "space-between",
    },
    rowStyle: {
      fontSize: 11,
      color: "black",
    },
  };

  return (
    <MaterialTable
      title=""
      columns={checkType()}
      data={data}
      detailPanel={[
        {
          tooltip: "Open Law URL",
          render: (rowData) => (
            <SimpleModal title={rowData["Act URL"]} src={rowData["Act URL"]} />
            // <iframe
            //   style={{ border: "3px solid blue" }}
            //   title={rowData["Act URL"]}
            //   src={rowData["Act URL"]}
            //   height="400px"
            //   width="100%"
            // />
          ),
        },
      ]}
      options={options}
    />
  );
}
