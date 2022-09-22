const columns = [
  { field: "id", headerName: "ID", width: 40 },

  {
    field: "name",
    headerName: "Name",
    width: 200,
    type: "string",
    editable: true,

    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src="/images/avatar.png" alt="IMG" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email Address",
    width: 200,
    type: "string",
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    width: 80,
    editable: true,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.company.name}</div>;
    },
  },
  {
    field: "website",
    headerName: "Website",
    width: 140,
    type: "string",
    editable: true,
  },
];

export default columns;
