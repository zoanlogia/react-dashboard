/** @format */

import { Link } from "react-router-dom";
import "./product.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import Drone from "../../assets/img/drone.png";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h1 className="product__titleContainer__title">Produit</h1>
        <Link to="/newProduct">
          <button className="product__addButton">Créer</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product__top__left">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Performances de ventes"
          />
        </div>
        <div className="product__top__right">
          <div className="product__top__right__info">
            <img
              className="product__top__right__info__img"
              src={Drone}
              alt="drone"
            />
            <span className="product__top__right__info__name">Drone 4k</span>
          </div>
          <div className="product__top__right__bottom">
            <div className="product__top__right__bottom__item">
              <span className="product__top__right__bottom__item__key">
                id:
              </span>
              <span className="product__top__right__bottom__item__value">
                1
              </span>
            </div>
            <div className="product__top__right__bottom__item">
              <span className="product__top__right__bottom__item__key">
                Ventes:
              </span>
              <span className="product__top__right__bottom__item__value">
                123
              </span>
            </div>
            <div className="product__top__right__bottom__item">
              <span className="product__top__right__bottom__item__key">
                En cours:
              </span>
              <span className="product__top__right__bottom__item__value">
                Oui
              </span>
            </div>
            <div className="product__top__right__bottom__item">
              <span className="product__top__right__bottom__item__key">
                En stock:
              </span>
              <span className="product__top__right__bottom__item__value">
                Non
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form action="" className="product__form">
          <div className="product__form__left">
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
          <div className="product__form__right">
            <div className="product__form__right__upload">
              <img
                className="product__form__right__upload__img"
                src={Drone}
                alt="drone"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="text" id="file" style={{ display: "none" }} />
            </div>
            <button className="product__form__right__btn">Télécharger</button>
          </div>
        </form>
      </div>
    </div>
  );
}
