import { DataGrid } from "@material-ui/data-grid";
import Avatar from "../../assets/img/moi.jpg";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./products.scss";

export default function Products() {
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
 