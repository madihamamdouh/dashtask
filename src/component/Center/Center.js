import * as React from "react";
import "./center.scss";
import { useEffect, useState } from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import columns from "../../Data/UserData";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import EditToolbar from "./NewCenter";

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};
function Center() {
  const [users, setUsers] = useState([]);
  const { loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 6,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/?10")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [users]);

  const [selectedCellParams, setSelectedCellParams] = React.useState(null);
  const [cellModesModel, setCellModesModel] = React.useState({});

  const handleCellFocus = React.useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  return (
    <>
      <div
        className="user"
        style={{ height: 520, width: "100%", maxWidth: "95%" }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          loading={loading}
          onCellKeyDown={handleCellKeyDown}
          cellModesModel={cellModesModel}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: {
              cellMode,
              selectedCellParams,
              setSelectedCellParams,
              cellModesModel,
              setCellModesModel,
            },
            cell: {
              onFocus: handleCellFocus,
            },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
}
export default Center;
