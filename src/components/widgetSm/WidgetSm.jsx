/** @format */

import { Visibility } from "@material-ui/icons";
import Avatar from "../../assets/img/moi.jpg";
import "./widgetSm.scss";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSm__title">Nouveaux utilisateurs</h3>
      <ul className="widgetSm__list">
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
        <li className="widgetSm__item">
          <img src={Avatar} alt="utilisateur" className="widgetSm__image" />
          <div className="widgetSm__user">
            <span className="widgetSm__username">Guillaume Flambard</span>
            <span className="widgetSm__user__title">Developpeur web</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__button__icon" /> Afficher
          </button>
        </li>
      </ul>
    </div>
  );
}
