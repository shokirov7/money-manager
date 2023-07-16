const columns = [
    { field: "id", headerName: "T/r", width: 70 },
    { field: "manzil", headerName: "Manzil", width: 230 },
    {
      field: "tel",
      headerName: "Telefon raqami",
      type: "number",
      width: 200,
    },
    {
      field: "nom",
      headerName: "Nom",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "rasm",
      headerName: "Rasm",
      width: 100,
    },
  ];
  
  export { columns };  