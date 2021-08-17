/** @format */

import "./user.scss";
import Avatar from "../../assets/img/moi.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="user">
      <div className="container__title">
        <h1 className="title__user">Modifier vos informations</h1>
        <button className="user__btn">Modifier</button>
      </div>
      <div className="user__container">
        <div className="user__container__userShow">
          <div className="user__container__userShow__top">
            <img
              src={Avatar}
              alt="avatar"
              className="user__container__userShow__top__img"
            />
            <div className="user__container__userShow__top__title">
              <span className="user__container__userShow__top__title__username">
                Guillaume Flambard
              </span>
              <span className="user__container__userShow__top__title__job">
                Web developper
              </span>
            </div>
          </div>
          <div className="user__container__userShow__bottom">
            <span className="user__container__userShow__bottom__description">
              Détails du compte
            </span>
            <div className="user__container__userShow__bottom__info">
              <PermIdentity className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__title">
                Zoanlogia75
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <CalendarToday className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__date">
                12/02/2021
              </span>
            </div>
            <div className="user__container__userShow__bottom__description">
              Contact
            </div>
            <div className="user__container__userShow__bottom__info">
              <MailOutline className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__email">
                g.xxxx@xxx.com
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <PhoneAndroid className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__number">
                06 11 78 76 45
              </span>
            </div>
            <div className="user__container__userShow__bottom__info">
              <LocationSearching className="user__container__userShow__bottom__info__icon" />
              <span className="user__container__userShow__bottom__info__adress">
                12 rue de paupaul, Paris
              </span>
            </div>
          </div>
        </div>
        <div className="user__container__userUpdate"></div>
      </div>
    </div>
  );
}