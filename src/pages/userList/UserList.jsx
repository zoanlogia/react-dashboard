/** @format */

import "./userList.scss";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "../../assets/img/moi.jpg";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "user",
      headerName: "Utilisateur",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList__user">
            <img className="userList__user__img" src={Avatar} alt="avatar" />
            {params.row.user}
          </div>
        );
      },
      editable: true,
    },
    {
      field: "email",
      headerName: "email",
      width: 200,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      width: 120,
    },
    {
      field: "status",
      headerName: "Statut",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userList__edit">Editer</button>
            </Link>
            <DeleteOutline
              className="userList__edit__icon"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
