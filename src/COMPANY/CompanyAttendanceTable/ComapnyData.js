export const CompanyTableview = [
  {
    id: 1,
    tableHeading: "S/N",
    tablesbody: [], // We'll populate this dynamically
  },
  {
    id: 2,
    tableHeading: "Name",
    tablesbody: [
      { tableData: "Corona School" },
      { tableData: "UBA Bank" },
      { tableData: "Star Kiddies" },
      { tableData: "Star Finance" },
      { tableData: "Glory Microfinace" },
      { tableData: "Star Kiddies" },
      { tableData: "GOE Ventures" },
      { tableData: "Star Kiddies" },
      { tableData: "Glory of God School" },
    ],
  },
  {
    id: 3,
    tableHeading: "Admin Email",
    tablesbody: [
      { tableData: "austin@coronaschool.com" },
      { tableData: "Ejike@gmail.com" },
      { tableData: "Chris@gmail.com" },
      { tableData: "Daniel@gmail.com" },
      { tableData: "Ibrahim@gmail.com" },
      { tableData: "Esther@gmail.com" },
      { tableData: "Chinaza@gmail.com" },
      { tableData: "Bola@gmail.com" },
      { tableData: "Rose@gmail.com" },
    ],
  },
  {
    id: 4,
    tableHeading: "Phone",
    tablesbody: Array(9).fill({ tableData: "08011404850" }),
  },
  {
    id: 5,
    tableHeading: "Location",
    tablesbody: Array(9).fill({ tableData: "Lagos" }),
  },
  {
    id: 6,
    tableHeading: "No. of Staff",
    tablesbody: Array(9).fill({ tableData: 50 }),
  },
  {
    id: 7,
    tableHeading: "Status",
    tablesbody: [
      { tableData: "ACTIVE" },
      { tableData: "ACTIVE" },
      { tableData: "check in" },
      { tableData: "INACTIVE" },
      { tableData: "INACTIVE" },
      { tableData: "INACTIVE" },
      { tableData: "ACTIVE" },
      { tableData: "ACTIVE" },
      { tableData: "INACTIVE" },
    ],
  },
  {
    id: 8,
    tableHeading: "Action",
    tablesbody: Array(9).fill({ deleteIcon: true }),
  },
];
