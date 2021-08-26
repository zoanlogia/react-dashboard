/** @format */

import { DataGrid } from "@material-ui/data-grid";
import Drone from "../../assets/img/drone.png";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./productList.scss";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "product",
      headerName: "Model",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productList__product">
            <img className="productList__product__img" src={Drone} alt="drone" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "product",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Statut",
      width: 120,
    },
    {
      field: "price",
      headerName: "Prix",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productList__edit">Editer</button>
            </Link>
            <DeleteOutline
              className="productList__edit__icon"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
