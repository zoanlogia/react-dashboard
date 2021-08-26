/** @format */

import "./newProduct.scss";
import Drone from "../../assets/img/drone.png";
import { Publish } from "@material-ui/icons";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="newProduct__bottom">
        <form action="" className="newProduct__form">
          <div className="newProduct__form__left">
            <label htmlFor="">Nom du produit</label>
            <input type="text" placeholder="Drone" />
            <label htmlFor="">En stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            <label htmlFor="active">En cours</label>
            <select name="active" id="active">
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
          </div>
          <div className="newProduct__form__right">
            <div className="newProduct__form__right__upload">
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="text" id="file" style={{ display: "none" }} />
            </div>
            <button className="newProduct__form__right__btn">Télécharger</button>
          </div>
        </form>
      </div>
    </div>
  );
}
